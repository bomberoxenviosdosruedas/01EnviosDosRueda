'use server';
/**
 * @fileOverview Flow to generate an optimal image prompt using the 5 Pillars Formula.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import companyProfile from '@/lib/empresa.json';

const GenerateOptimalImagePromptInputSchema = z.object({
  serviceName: z.string().describe("The name of the service."),
  serviceContext: z.string().describe("The full JSON context of the service."),
  sectionType: z.string().describe("The intended use of the image."),
  visualStyle: z.string().describe("The desired visual style."),
  backgroundDetails: z.string().describe("The selected background detail."),
  contentDetails: z.string().describe("The selected content detail."),
  includeText: z.boolean().describe("Whether to include service name text."),
  includeBrand: z.boolean().describe("Whether to include company name and phone."),
  fontToInclude: z.string().optional().describe("Specific font to use."),
  additionalDetails: z.string().optional().describe("Additional user details."),
});

const GenerateOptimalImagePromptOutputSchema = z.object({
  prompt: z.string().describe("The final prompt following the 5 Pillars Formula."),
});
type GenerateOptimalImagePromptOutput = z.infer<typeof GenerateOptimalImagePromptOutputSchema>;

export async function generateOptimalImagePrompt(input: z.infer<typeof GenerateOptimalImagePromptInputSchema>): Promise<GenerateOptimalImagePromptOutput> {
  const aspectRatio = input.sectionType.match(/\(([^)]+)\)/)?.[1] || '16:9';

  const flowInput = {
    ...input,
    aspectRatio,
    company: companyProfile.company_profile,
  };

  return generateOptimalImagePromptFlow(flowInput);
}

const promptTemplate = ai.definePrompt({
  name: 'generateOptimalImagePromptTemplate',
  input: { schema: z.any() },
  output: { schema: GenerateOptimalImagePromptOutputSchema },
  prompt: `
    You are a world-class prompt engineering expert for Google Flow and Nano Banana Pro.
    Your objective is to generate an image prompt strictly using the "5 Pillars Formula".

    **5 PILLARS FORMULA:**
    [Subject + Adjectives] doing [Action] in [Location/Context]. [Composition/Camera Angle]. [Lighting/Atmosphere]. [Style/Medium]. [Text Restriction/Specific Details].

    **Brand Strategy (Envíos DosRuedas):**
    - Colors: Navy Blue (#2563EB) and Amber (#E89A17).
    - Vibe: Industrial Solid, professional, lightning-fast.
    - Location: Mar del Plata, Argentina.

    **Inputs:**
    - Service: {{serviceName}}
    - Context: {{serviceContext}}
    - Visual Style: {{visualStyle}}
    - Background: {{backgroundDetails}}
    - Content: {{contentDetails}}
    - Additional Info: {{additionalDetails}}
    - Aspect Ratio: {{aspectRatio}}

    **Formula Instructions:**
    1. **Subject/Action:** A professional courier in navy blue and amber uniform performing {{serviceName}} related tasks.
    2. **Composition:** Technical parameters (e.g., "Wide angle cinematic shot", "Low angle perspective", "Depth of field f/2.8").
    3. **Lighting:** Atmospheric descriptors (e.g., "Dramatic urban lighting", "Natural morning sunlight", "Soft cinematic glow").
    4. **Style:** Expert medium descriptors (e.g., "Hyper-realistic 8k photography", "Digital illustration", "Unreal Engine 5 render").
    5. **Text Restriction:**
       {{#if includeText}}
       Boldly display "{{serviceName}}" using {{#if fontToInclude}}{{fontToInclude}}{{else}}Orbitron{{/if}} font in white and amber.
       {{/if}}
       {{#if includeBrand}}
       Subtly place "Envíos DosRuedas" and "{{company.location_contact.phone}}" in the corner.
       {{/if}}
       {{#unless includeText}}{{#unless includeBrand}}Strictly NO text or written signs.{{/unless}}{{/unless}}

    **Final Instructions:**
    - Language: English.
    - Format: Single-paragraph prompt.
    - DO NOT include conversational filler. Output ONLY the prompt.

    Generate the 5-pillar prompt:
  `,
});

const generateOptimalImagePromptFlow = ai.defineFlow(
  {
    name: 'generateOptimalImagePromptFlow',
    inputSchema: z.any(),
    outputSchema: GenerateOptimalImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
