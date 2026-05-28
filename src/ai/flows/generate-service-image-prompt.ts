'use server';
/**
 * @fileOverview Flow to generate a detailed image prompt for a specific service using the 5 Pillars Formula.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import companyProfile from '@/lib/empresa.json';

const GenerateServiceImagePromptInputSchema = z.object({
  serviceName: z.string().describe("The name of the service."),
  serviceContext: z.string().describe("The full JSON context of the service."),
  sectionType: z.string().describe("The intended use of the image."),
  visualStyle: z.string().describe("The desired visual style."),
  backgroundDetails: z.string().describe("AI-suggested details for the background."),
  contentDetails: z.string().describe("AI-suggested details for the main content."),
  includeText: z.boolean().describe("Whether to include the service name text."),
  includeBrand: z.boolean().describe("Whether to include the brand name and phone."),
});
type GenerateServiceImagePromptInput = z.infer<typeof GenerateServiceImagePromptInputSchema>;

const GenerateServiceImagePromptOutputSchema = z.object({
  prompt: z.string().describe("The final prompt following the 5 Pillars Formula."),
});
type GenerateServiceImagePromptOutput = z.infer<typeof GenerateServiceImagePromptOutputSchema>;

export async function generateServiceImagePrompt(input: GenerateServiceImagePromptInput): Promise<GenerateServiceImagePromptOutput> {
  const aspectRatio = input.sectionType.match(/\(([^)]+)\)/)?.[1] || '16:9';

  const flowInput = {
    ...input,
    aspectRatio,
    company: companyProfile.company_profile,
  };

  return generateServiceImagePromptFlow(flowInput);
}

const promptTemplate = ai.definePrompt({
  name: 'generateServiceImagePromptTemplate',
  input: { schema: z.any() },
  output: { schema: GenerateServiceImagePromptOutputSchema },
  prompt: `
    You are a world-class expert in prompt engineering for Google Flow image models.
    Generate a highly professional image prompt strictly following the "5 Pillars Formula".

    **5 PILLARS FORMULA:**
    [Subject + Adjetivos] haciendo [Acción] en [Ubicación/Contexto]. [Composición/Ángulo de Cámara]. [Iluminación/Atmósfera]. [Estilo/Medio]. [Restricción de Texto/Detalles Específicos].

    **Brand Guidelines (Envíos DosRuedas):**
    - Corporate Colors: Navy Blue (#2563EB) and Amber (#E89A17).
    - Identity: Reliable, fast, industrial logistics from Mar del Plata.

    **Creative Inputs:**
    - Service: {{serviceName}}
    - Context: {{serviceContext}}
    - Visual Style: {{visualStyle}}
    - Background: {{backgroundDetails}}
    - Main Content: {{contentDetails}}
    - Aspect Ratio: {{aspectRatio}}

    **Formula Implementation Instructions:**
    1. **Subject/Action:** Must include professional couriers wearing navy blue uniforms with amber accents. Action must represent {{serviceName}}.
    2. **Composition:** Use high-end technical photography terms (e.g., "Macro close-up shot, shallow depth of field f/1.8", "Wide isometric shot").
    3. **Lighting:** (e.g., "Cinematic lighting, golden hour sunlight, neon reflections").
    4. **Style:** (e.g., "Photorealistic 8k render, commercial photography, UI SaaS aesthetic") matching {{visualStyle}}.
    5. **Text Restriction:**
       {{#if includeText}}
       The sign clearly reads "{{serviceName}}" in bold Orbitron font, white and amber.
       {{/if}}
       {{#if includeBrand}}
       Subtly include "Envíos DosRuedas" and phone "{{company.location_contact.phone}}" in the corner.
       {{/if}}
       {{#unless includeText}}{{#unless includeBrand}}Strictly NO text or logos.{{/unless}}{{/unless}}

    **Constraints:**
    - Final prompt MUST be in English.
    - DO NOT output conversational text. Output ONLY the final image prompt.

    Generate the final prompt:
  `,
});

const generateServiceImagePromptFlow = ai.defineFlow(
  {
    name: 'generateServiceImagePromptFlow',
    inputSchema: z.any(),
    outputSchema: GenerateServiceImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
