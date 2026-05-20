// src/app/admin/clientes/actions.ts
'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { Prisma } from '../../../../generated/prisma/client/client';
import { revalidatePath } from 'next/cache';

interface GeocodeResult {
  lat: number;
  lng: number;
  formatted_address: string;
}

export async function geocodeAddress(address: string): Promise<{ success: boolean; data?: GeocodeResult; error?: string }> {
  const query = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&addressdetails=1&bounded=1&viewbox=-57.65,-38.08,-57.50,-37.90`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'EnviosDosRuedas-App/1.0 (info@enviosdosruedas.com)',
      },
    });

    if (!response.ok) {
        return { success: false, error: "Error de comunicación con el servicio de geolocalización." };
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      return {
        success: true,
        data: {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          formatted_address: data[0].display_name,
        },
      };
    } else {
      return { success: false, error: `No se encontraron resultados para "${address}" en Mar del Plata.` };
    }
  } catch (e: unknown) {
    const error = e instanceof Error ? e : new Error(String(e));
    console.error('Geocoding fetch error:', error);
    return { success: false, error: `Error de red al geolocalizar: ${error.message}` };
  }
}

const clientSchema = z.object({
  id: z.coerce.number().int().optional(),
  name: z.string().min(2, 'El nombre es requerido.'),
  lastName: z.string().optional(),
  phone: z.string().min(7, 'El teléfono es requerido.').regex(/^\+?\d{7,15}$/, 'Formato de teléfono inválido.').optional().or(z.literal('')),
  email: z.string().email('Email inválido.').optional().or(z.literal('')),
  address: z.string().min(5, 'La dirección es requerida.'),
  addressLat: z.coerce.number(),
  addressLng: z.coerce.number(),
});

export interface ClientFormState {
  message?: string;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof clientSchema>, string[]>>;
}

async function upsertClient(formData: FormData): Promise<ClientFormState> {
  const rawData = {
    id: formData.get('id'),
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    address: formData.get('address'),
    addressLat: formData.get('addressLat'),
    addressLng: formData.get('addressLng'),
  };

  const validatedFields = clientSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: 'Por favor, corrige los errores del formulario.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { id, ...data } = validatedFields.data;

  try {
    if (id) {
      // Update existing client
      await prisma.client.update({
        where: { id },
        data: {
          ...data,
          addressLat: new Prisma.Decimal(data.addressLat),
          addressLng: new Prisma.Decimal(data.addressLng),
          phone: data.phone || null,
        },
      });
      revalidatePath('/admin/clientes');
      revalidatePath(`/admin/clientes/${id}`);
      return { message: `Cliente "${data.name}" actualizado exitosamente.` };
    } else {
      // Create new client
      const newClient = await prisma.client.create({
        data: {
          name: data.name,
          lastName: data.lastName || null,
          phone: data.phone || null,
          email: data.email || null,
          address: data.address,
          addressLat: new Prisma.Decimal(data.addressLat),
          addressLng: new Prisma.Decimal(data.addressLng),
          isActive: true,
        },
      });
      revalidatePath('/admin/clientes');
      return { message: `Cliente "${newClient.name}" creado exitosamente.` };
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        const target = e.meta?.target as string[];
        if (target.includes('phone')) {
          return { error: `El número de teléfono "${data.phone}" ya está registrado.` };
        }
        if (target.includes('email')) {
          return { error: `El email "${data.email}" ya está registrado.` };
        }
      }
    }
    console.error(e);
    return { error: 'Ocurrió un error en la base de datos.' };
  }
}

export async function createClient(prevState: ClientFormState, formData: FormData): Promise<ClientFormState> {
    return upsertClient(formData);
}

export async function updateClient(prevState: ClientFormState, formData: FormData): Promise<ClientFormState> {
    return upsertClient(formData);
}

export async function toggleClientStatus(id: number, currentStatus: boolean): Promise<{ success: boolean; error?: string }> {
  try {
    await prisma.client.update({
      where: { id },
      data: { isActive: !currentStatus },
    });
    revalidatePath('/admin/clientes');
    return { success: true };
  } catch (error) {
    console.error(`Error toggling status for client #${id}:`, error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
       return { success: false, error: 'No se encontró el cliente para actualizar.' };
    }
    return { success: false, error: 'Ocurrió un error al cambiar el estado del cliente.' };
  }
}
