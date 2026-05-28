'use server';
/**
 * @fileOverview Flow to generate detailed image prompts using the 5 Pillars Formula.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import companyProfile from '@/lib/empresa.json';
import imageProfiles from '@/lib/imagenes.json';

const GenerateImagePromptInputSchema = z.object({
  sectionType: z.string().describe("The type of page section (e.g., Hero, Card, Banner)."),
  serviceName: z.string().describe("The service name (e.g., Envíos Express, Plan Emprendedores)."),
  serviceContext: z.string().optional().describe("Detailed service context to enrich the prompt."),
  aspectRatio: z.string().describe("Image aspect ratio (e.g., '16:9', '1:1')."),
  style: z.string().describe("Desired visual style."),
  background: z.string().optional().describe("Desired background description."),
  additionalDetails: z.string().optional().describe("User-specific requirements."),
  inspirationImageName: z.string().optional().describe("Inspiration image name from imagenes.json."),
  textToInclude: z.string().optional().describe("Optional text to include."),
});
type GenerateImagePromptInput = z.infer<typeof GenerateImagePromptInputSchema>;

const GenerateImagePromptOutputSchema = z.object({
  prompt: z.string().describe("The final, detailed prompt strictly following the 5 Pillars Formula."),
});
type GenerateImagePromptOutput = z.infer<typeof GenerateImagePromptOutputSchema>;

export async function generateImagePrompt(input: GenerateImagePromptInput): Promise<GenerateImagePromptOutput> {
  const companyData = companyProfile.company_profile;
  
  let inspirationImageData = null;
  if (input.inspirationImageName && input.inspirationImageName !== 'none') {
    inspirationImageData = imageProfiles.image_profiles.find(img => img.name === input.inspirationImageName) || null;
  }

  const flowInput = {
    ...input,
    company: companyData,
    inspirationImage: inspirationImageData,
  };

  return generateImagePromptFlow(flowInput);
}

const promptTemplate = ai.definePrompt({
  name: 'generateImagePromptTemplate',
  input: { schema: z.any() },
  output: { schema: GenerateImagePromptOutputSchema },
  prompt: `
    You are a world-class prompt engineer for advanced image models (Google Flow).
    Your task is to generate a prompt strictly following the "5 Pillars Formula".

    **5 PILLARS FORMULA:**
    [Subject + Adjectives] doing [Action] in [Location/Context]. [Composition/Camera Angle]. [Lighting/Atmosphere]. [Style/Medium]. [Text Restriction/Specific Details].

    **Brand Identity (Envíos DosRuedas):**
    - Colors: Navy Blue (#2563EB) and Amber (#E89A17).
    - Vibe: Professional, industrial, high-tech, and reliable.
    - Location: Mar del Plata, Argentina (subtle coastal/urban cues).

    **Input Context:**
    - Service: {{serviceName}}
    - Context: {{serviceContext}}
    - Section: {{sectionType}}
    - Aspect Ratio: {{aspectRatio}}
    - Style: {{style}}
    - Background: {{background}}
    - Additional: {{additionalDetails}}
    {{#if inspirationImage}}- Inspiration: {{inspirationImage.description}} ({{inspirationImage.tags}}){{/if}}

    **Rules for the Formula:**
    1. **Subject/Action:** Use professional couriers with navy blue and amber gear. Action must reflect the service (e.g., fast delivery for Express, massive routing for Low Cost).
    2. **Composition:** Use technical terms like "Wide angle cinematic shot", "Macro close-up f/1.8", "Isometric 3D perspective".
    3. **Lighting:** Use "Cinematic golden hour", "High-contrast studio lighting", "Cool neon night reflections".
    4. **Style:** Match the requested style ({{style}}) using keywords like "Photorealistic 8k render", "Clean vector art", "Octane 3D render".
    5. **Text Restriction:**
       {{#if textToInclude}}
       The sign/element clearly reads "{{textToInclude}}" in a bold Orbitron font, white and amber colors.
       {{else}}
       Strictly NO text, letters, or logos.
       {{/if}}

    **Output Requirement:**
    Output ONLY the final image prompt in English. No conversational text. No explanations.

    Generate the final 5-pillar prompt below:
  `,
});

const generateImagePromptFlow = ai.defineFlow(
  {
    name: 'generateImagePromptFlow',
    inputSchema: z.any(),
    outputSchema: GenerateImagePromptOutputSchema,
  },
  async (input) => {
    const { output } = await promptTemplate(input);
    return output!;
  }
);
