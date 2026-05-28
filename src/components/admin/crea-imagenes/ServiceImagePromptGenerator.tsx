// src/components/admin/crea-imagenes/ServiceImagePromptGenerator.tsx
'use client';

import { useActionState, useEffect, useState, useTransition, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  getServiceContextAction,
  suggestServiceImageDetailsAction,
  generateServiceImagePromptAction,
} from '@/app/admin/crea-imagenes/servicios/actions';
import type { GenerateServiceImagePromptState } from '@/app/admin/crea-imagenes/servicios/actions';
import { navGroups } from '@/lib/navigation';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, Sparkles, Copy, Check, Bot } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';


const serviceOptions = navGroups.find(g => g.label === 'Servicios')?.items.map(item => item.label) || [];

const visualStyleOptions = [
    'Fotografía Urbana y Cinematográfica',
    'Ilustración Vectorial Infográfica',
    'Render 3D Promocional',
    'Fotografía Humanizada (con Enfoque Minimalista)',
];
const sectionTypeOptions = ['Banner Web (16:9)', 'Post Red Social (1:1)', 'Historia (9:16)', 'Tarjeta de Servicio (4:3)'];

const serviceImagePromptSchema = z.object({
  serviceName: z.string().min(1, 'Debes seleccionar un servicio.'),
  serviceContext: z.string(),
  sectionType: z.string().min(1, 'El tipo de sección es requerido.'),
  visualStyle: z.string().min(1, 'El estilo visual es requerido.'),
  backgroundDetails: z.string().min(1, 'Los detalles del fondo son requeridos.'),
  contentDetails: z.string().min(1, 'Los detalles del contenido son requeridos.'),
  includeText: z.boolean(),
  includeBrand: z.boolean(),
});

type ServiceImagePromptValues = z.infer<typeof serviceImagePromptSchema>;

const initialState: GenerateServiceImagePromptState = {};

export function ServiceImagePromptGenerator() {
  const [state, formAction] = useActionState(generateServiceImagePromptAction, initialState);
  const [isPending, startTransition] = useTransition();
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [copied, setCopied] = useState(false);

  const { toast } = useToast();

  const form = useForm<ServiceImagePromptValues>({
    resolver: zodResolver(serviceImagePromptSchema),
    defaultValues: {
      serviceName: '',
      serviceContext: '',
      sectionType: 'Banner Web (16:9)',
      visualStyle: 'Fotografía Urbana y Cinematográfica',
      backgroundDetails: '',
      contentDetails: '',
      includeText: true,
      includeBrand: false,
    },
  });

  const selectedService = form.watch('serviceName');

  const handleServiceChange = useCallback(async (value: string) => {
    form.setValue('serviceName', value);
    setIsSuggesting(true);

    const contextResult = await getServiceContextAction(value);
    if (contextResult.success && contextResult.context) {
      const contextString = JSON.stringify(contextResult.context, null, 2);
      form.setValue('serviceContext', contextString);

      const suggestionsResult = await suggestServiceImageDetailsAction(contextResult.context);
      if (suggestionsResult.success && suggestionsResult.data) {
        form.setValue('backgroundDetails', suggestionsResult.data.backgroundDetails);
        form.setValue('contentDetails', suggestionsResult.data.contentDetails);
        toast({ title: '¡Listo!', description: 'Contexto cargado y detalles sugeridos por la IA.', className: 'bg-green-100 dark:bg-green-900/30' });
      } else {
        toast({ title: 'Error en Sugerencias', description: suggestionsResult.error, variant: 'destructive' });
      }
    } else {
      toast({ title: 'Error de Contexto', description: contextResult.error, variant: 'destructive' });
    }

    setIsSuggesting(false);
  }, [form, toast]);


  useEffect(() => {
    if (state.error) {
      toast({ title: 'Error al Generar Prompt', description: state.error, variant: 'destructive' });
    }
  }, [state, toast]);
  

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

  return (
     <Card className="max-w-4xl mx-auto shadow-2xl border-slate-800 bg-slate-900 rounded-none">
      <Form {...form}>
        <form onSubmit={handleFormSubmit}>
          <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative">
            {(isSuggesting) && (
              <div className="absolute inset-0 bg-slate-950/80 z-10 flex items-center justify-center">
                <div className="flex items-center gap-3 text-primary p-4 bg-slate-900 border border-slate-800 rounded-none shadow-2xl">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                  <span className="font-semibold text-slate-100">Analizando servicio y generando ideas...</span>
                </div>
              </div>
            )}
            
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="serviceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-base text-slate-200'>1. Selecciona el Servicio</FormLabel>
                    <Select onValueChange={handleServiceChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-none border-slate-700 bg-slate-950 text-slate-100"><SelectValue placeholder="Elige un servicio para empezar..." /></SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                        {serviceOptions.map(service => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-slate-400">Esto cargará el contexto y generará sugerencias automáticas.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="sectionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-200">2. Tipo de Sección</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedService}>
                    <FormControl><SelectTrigger className="rounded-none border-slate-700 bg-slate-950"><SelectValue /></SelectTrigger></FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                      {sectionTypeOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="visualStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-200">3. Estilo Visual</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedService}>
                    <FormControl><SelectTrigger className="rounded-none border-slate-700 bg-slate-950"><SelectValue /></SelectTrigger></FormControl>
                    <SelectContent className="rounded-none border-slate-700 bg-slate-950">
                      {visualStyleOptions.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="md:col-span-2 space-y-2">
              <FormField
                control={form.control}
                name="backgroundDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-200"><Bot className="w-4 h-4 text-blue-500"/> 4. Detalles del Fondo (Sugerido por IA)</FormLabel>
                    <FormControl>
                      <Textarea className="rounded-none border-slate-700 bg-slate-950 text-slate-300" placeholder="Los detalles del fondo sugeridos por la IA aparecerán aquí..." {...field} disabled={!selectedService} rows={2}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <FormField
                control={form.control}
                name="contentDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-200"><Bot className="w-4 h-4 text-blue-500"/> 5. Contenido Principal (Sugerido por IA)</FormLabel>
                    <FormControl>
                      <Textarea className="rounded-none border-slate-700 bg-slate-950 text-slate-300" placeholder="El contenido principal sugerido por la IA aparecerá aquí..." {...field} disabled={!selectedService} rows={3}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2 space-y-4">
                <FormLabel className="text-slate-200">6. Opciones de Texto y Marca</FormLabel>
                 <FormField
                    control={form.control}
                    name="includeText"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-none border border-slate-800 p-4 bg-slate-950/50">
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={!selectedService} className="border-slate-600 data-[state=checked]:bg-blue-600" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-slate-200">Incluir Nombre del Servicio</FormLabel>
                            <FormDescription className="text-slate-400">
                                {"Añade el nombre del servicio (ej. 'Envíos Express') en la imagen con la tipografía y colores de la marca."}
                            </FormDescription>
                        </div>
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="includeBrand"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-none border border-slate-800 p-4 bg-slate-950/50">
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={!selectedService} className="border-slate-600 data-[state=checked]:bg-blue-600" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-slate-200">Incluir Marca y Contacto</FormLabel>
                            <FormDescription className="text-slate-400">
                                {"Superpone el nombre 'Envios DosRuedas' y el teléfono en la imagen."}
                            </FormDescription>
                        </div>
                        </FormItem>
                    )}
                />
            </div>
             <input type="hidden" {...form.register('serviceContext')} />
          </CardContent>
          <CardFooter className="flex flex-col gap-4 p-6 border-t border-slate-800">
            <Button type="submit" disabled={isPending || !selectedService} className="w-full rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-6">
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              {isPending ? 'Generando Prompt...' : 'Generar Prompt Final'}
            </Button>
            {state.prompt && (
              <Alert className="bg-slate-950 border-blue-900 rounded-none w-full">
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
