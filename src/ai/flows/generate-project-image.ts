// use server'

/**
 * @fileOverview AI Project Visualizer flow that generates a realistic image of a woodworking project based on the generated description.
 *
 * - generateProjectImage - A function that handles the image generation process.
 * - GenerateProjectImageInput - The input type for the generateProjectImage function.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectImageInputSchema = z.object({
  description: z.string().describe('The description of the woodworking project.'),
});
export type GenerateProjectImageInput = z.infer<typeof GenerateProjectImageInputSchema>;

const GenerateProjectImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateProjectImageOutput = z.infer<typeof GenerateProjectImageOutputSchema>;

export async function generateProjectImage(input: GenerateProjectImageInput): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(input);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      // IMPORTANT: ONLY the googleai/gemini-2.0-flash-exp model is able to generate images. You MUST use exactly this model to generate images.
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: input.description,
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    return {imageUrl: media.url!};
  }
);
