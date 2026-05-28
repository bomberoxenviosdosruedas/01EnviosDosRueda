// src/components/admin/crea-imagenes/ImagePromptGenerator.tsx
'use client';

import { useActionState, useEffect, useState, useTransition, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { generateImagePromptAction, suggestImageParamsAction } from '@/app/admin/crea-imagenes/generales/actions';
import { summarizeServicePage } from '@/ai/flows/summarize-service-page';
import type { GenerateImagePromptState } from '@/app/admin/crea-imagenes/generales/actions';
import { navGroups } from '@/lib/navigation';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Sparkles, Copy, Check, Image as ImageIcon, Pilcrow, BookText, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ImageProfile {
  name: string;
  alt_text: string;
  description: string;
  tags: string[];
}

const sections = ['Hero', 'Card', 'Banner', 'General', 'Ilustración'];
const aspectRatios = ['16:9 (Panorámica)', '1:1 (Cuadrada)', '9:16 (Vertical)'];
const styles = ['Fotografía Realista', 'Ilustración Digital', 'Arte 3D', 'Estilo Cinematográfico', 'Minimalista'];

const serviceToPathMap: Record<string, string> = {
  "Envíos Express": "src/app/servicios/envios-express/page.tsx",
  "Envíos Low Cost": "src/app/servicios/envios-lowcost/page.tsx",
  "Envíos Flex MercadoLibre": "src/app/servicios/enviosflex/page.tsx",
  "Moto Fija para Negocios": "src/app/servicios/moto-fija/page.tsx",
  "Plan Emprendedores": "src/app/servicios/plan-emprendedores/page.tsx",
  "Delivery Gastronómico": "src/app/servicios/delivery-gastronomico/page.tsx",
};

const promptGeneratorSchema = z.object({
  sectionType: z.string().min(1, 'El tipo de sección es requerido.'),
  service: z.string().min(1, 'El servicio es requerido.'),
  serviceContext: z.string().optional(),
  aspectRatio: z.string().min(1, 'La relación de aspecto es requerida.'),
  style: z.string().min(1, 'El estilo visual es requerido.'),
  background: z.string().optional(),
  details: z.string().optional(),
  inspirationImageName: z.string().optional(),
  textToInclude: z.string().optional(),
});

type PromptGeneratorFormValues = z.infer<typeof promptGeneratorSchema>;

const initialState: GenerateImagePromptState = {};

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      {isPending ? 'Generando Prompt...' : 'Generar Prompt'}
    </Button>
  );
}

export function ImagePromptGenerator() {
  const [state, formAction] = useActionState(generateImagePromptAction, initialState);
  const [isPending, startTransition] = useTransition();
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isContextLoading, setIsContextLoading] = useState(false);
  const [imageProfiles, setImageProfiles] = useState<ImageProfile[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    async function fetchImageProfiles() {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Failed to fetch image profiles');
        }
        const data = await response.json();
        setImageProfiles(data.image_profiles);
      } catch (error) {
        console.error("Error fetching image profiles:", error);
        toast({ title: 'Error', description: 'No se pudieron cargar los perfiles de imagen.', variant: 'destructive'});
      }
    }
    fetchImageProfiles();
  }, [toast]);

  const form = useForm<PromptGeneratorFormValues>({
    resolver: zodResolver(promptGeneratorSchema),
    defaultValues: {
      sectionType: 'General', service: 'General', aspectRatio: '16:9 (Panorámica)',
      style: 'Fotografía Realista', background: '', details: '', inspirationImageName: 'none', textToInclude: '',
      serviceContext: '',
    },
  });

  const service = form.watch('service');
  const serviceContext = form.watch('serviceContext');

  useEffect(() => {
    async function updateContext() {
      if (service && service !== 'General' && serviceToPathMap[service]) {
        setIsContextLoading(true);
        try {
          const contextResult = await summarizeServicePage({ relativePath: serviceToPathMap[service] });
          if (contextResult.summary) {
             form.setValue('serviceContext', contextResult.summary);
             toast({ title: 'Contexto Cargado', description: `Información de ${service} obtenida correctamente.` });
          }
        } catch (error) {
           console.error("Error summarizing page:", error);
           toast({ title: 'Aviso', description: 'No se pudo cargar el contexto dinámico.', variant: 'default' });
        } finally {
          setIsContextLoading(false);
        }
      } else {
        form.setValue('serviceContext', '');
      }
    }
    updateContext();
  }, [service, form, toast]);

  const handleInspirationChange = useCallback(async (value: string) => {
    form.setValue('inspirationImageName', value);
    if (value === 'none') return;

    setIsSuggesting(true);
    try {
      const result = await suggestImageParamsAction(value);
      if (result.success && result.data) {
        form.setValue('sectionType', result.data.sectionType);
        form.setValue('aspectRatio', result.data.aspectRatio);
        form.setValue('style', result.data.style);
        form.setValue('background', result.data.background);
        form.setValue('details', result.data.details);
        toast({ title: 'Parámetros Sugeridos', description: 'La IA ha ajustado los campos según la imagen.' });
      }
    } catch (error) {
      console.error("Error suggesting params:", error);
    } finally {
      setIsSuggesting(false);
    }
  }, [form, toast]);

  const handleSuggestFromContext = async () => {
    if (!serviceContext) return;
    setIsSuggesting(true);
    try {
       const result = await suggestImageParamsAction('', serviceContext);
       if (result.success && result.data) {
          form.setValue('background', result.data.background);
          form.setValue('details', result.data.details);
          toast({ title: 'Sugerencias Generadas', description: 'Detalles de fondo y contenido actualizados.' });
       }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleFormSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    startTransition(() => formAction(formData));
  });

  const handleCopy = () => {
    if (state.prompt) {
      navigator.clipboard.writeText(state.prompt);
      setCopied(true);
      toast({ title: 'Copiado', description: 'El prompt se ha copiado al portapapeles.' });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const allServicesAndPages = [
    ...Object.keys(serviceToPathMap),
    ...navGroups.flatMap(g => g.items.map(i => i.label))
  ];

  return (
    <Card className="max-w-4xl mx-auto shadow-xl border-slate-800 bg-slate-900 rounded-none">
      <Form {...form}>
        <form onSubmit={handleFormSubmit}>
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative">
             {(isSuggesting || isContextLoading) && (
                <div className="absolute inset-0 bg-slate-950/80 z-10 flex items-center justify-center">
                   <div className="flex items-center gap-3 text-primary p-4 bg-slate-900 border border-slate-800 rounded-none shadow-2xl">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                    <span className="font-semibold text-slate-100">{isContextLoading ? 'Cargando contexto...' : 'IA Analizando...'}</span>
                   </div>
                </div>
             )}
            <div className="md:col-span-2">
                 <FormField
                    control={form.control}
                    name="inspirationImageName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className='flex items-center gap-2'><ImageIcon className='w-4 h-4' /> Usar Imagen de Inspiración (Opcional)</FormLabel>
                        <Select onValueChange={handleInspirationChange} value={field.value}>
                            <FormControl>
                            <SelectTrigger className="rounded-none border-slate-700 bg-slate-950">
                                <SelectValue placeholder="Selecciona una imagen base..." />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                                <SelectItem value="none">Ninguna (Crear desde cero)</SelectItem>
                                {imageProfiles.map(img => (
                                    <SelectItem key={img.name} value={img.name}>{img.name} - {img.alt_text}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormDescription className="text-slate-400">La IA sugerirá parámetros y creará una versión mejorada basada en la imagen seleccionada.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Página / Servicio Asociado</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border-slate-700 bg-slate-950">
                        <SelectValue placeholder="Selecciona un servicio..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                       <SelectItem value="General">General / Ninguno</SelectItem>
                      {[...new Set(allServicesAndPages)].map(service => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sectionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Sección / Elemento</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border-slate-700 bg-slate-950">
                        <SelectValue placeholder="Selecciona una sección..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                      {sections.map(section => (
                        <SelectItem key={section} value={section}>{section}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
             <div className="md:col-span-2">
               <FormField
                  control={form.control}
                  name="serviceContext"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-slate-300"><BookText className="w-4 h-4 text-blue-500" /> Contexto del Servicio para la IA</FormLabel>
                      <FormControl>
                        <Textarea
                          readOnly
                          rows={6}
                          className="bg-slate-950 border-slate-800 text-slate-400 text-xs font-mono rounded-none"
                          placeholder="El contexto del servicio seleccionado aparecerá aquí..."
                          {...field}
                        />
                      </FormControl>
                       <FormDescription className="flex items-center gap-2 text-slate-500">
                        <Info className="w-3 h-3"/> Este texto se inyecta en el prompt para darle a la IA información precisa sobre el servicio.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </div>


             <FormField
              control={form.control}
              name="aspectRatio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relación de Aspecto</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl><SelectTrigger className="rounded-none border-slate-700 bg-slate-950"><SelectValue /></SelectTrigger></FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                      {aspectRatios.map(ratio => <SelectItem key={ratio} value={ratio}>{ratio}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="style"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estilo Visual</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl><SelectTrigger className="rounded-none border-slate-700 bg-slate-950"><SelectValue /></SelectTrigger></FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                      {styles.map(style => <SelectItem key={style} value={style}>{style}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="md:col-span-2 space-y-1">
                <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Detalles del Fondo (Opcional)</FormLabel>
                    <FormControl>
                        <Input className="rounded-none border-slate-700 bg-slate-950" placeholder="Ej: 'fondo de playa difuminado', 'interior de un taller moderno'" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="md:col-span-2 space-y-1">
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detalles Adicionales de Contenido (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        className="rounded-none border-slate-700 bg-slate-950"
                        placeholder="Ej: 'mostrar un repartidor sonriendo', 'escena nocturna', 'cliente recibiendo el paquete feliz'"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={handleSuggestFromContext}
                disabled={!serviceContext || isSuggesting}
                className="w-full md:w-auto rounded-none border-slate-700 hover:bg-slate-800"
               >
                 <Sparkles className="w-4 h-4 mr-2" />
                 Sugerir con IA (Basado en Contexto)
               </Button>
            </div>
            <div className="md:col-span-2">
                <FormField
                control={form.control}
                name="textToInclude"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="flex items-center gap-2"><Pilcrow className="h-4 w-4"/> Texto a Incluir en la Imagen (Opcional)</FormLabel>
                    <FormControl>
                        <Input className="rounded-none border-slate-700 bg-slate-950" placeholder="Ej: Envíos Express" {...field} list="text-suggestions" />
                    </FormControl>
                    <datalist id="text-suggestions">
                        {allServicesAndPages.map(item => <option key={item} value={item} />)}
                    </datalist>
                    <FormDescription className="text-slate-500">
                      Deja vacío si no quieres texto en la imagen. Puedes usar los servicios como sugerencia.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 p-6 border-t border-slate-800">
            <SubmitButton isPending={isPending} />
            {state.prompt && (
              <Alert className="bg-slate-950 border-blue-900 rounded-none">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <AlertTitle className="text-blue-300 font-semibold">Prompt Generado</AlertTitle>
                <AlertDescription className="text-slate-300 whitespace-pre-wrap font-mono text-sm relative pr-10">
                  {state.prompt}
                   <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-0 h-8 w-8 text-blue-400 hover:bg-slate-900"
                      onClick={handleCopy}
                      type="button"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
