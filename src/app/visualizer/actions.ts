"use server";

import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { generateProjectImage } from "@/ai/flows/generate-project-image";

interface VisualizationResult {
  success: boolean;
  description?: string;
  imageUrl?: string;
  error?: string;
}

export async function visualizeProject(projectIdea: string): Promise<VisualizationResult> {
  if (!projectIdea || projectIdea.trim().length < 10) {
    return {
      success: false,
      error: "Project idea must be at least 10 characters long.",
    };
  }

  try {
    // Generate description
    const descriptionResult = await generateProjectDescription({
      projectDescription: projectIdea,
    });
    
    const detailedDescription = descriptionResult.detailedDescription;

    if (!detailedDescription) {
      return {
        success: false,
        error: "Failed to generate project description.",
      };
    }

    // Generate image based on the detailed description
    const imageResult = await generateProjectImage({
      description: `A realistic, high-quality photo of the following woodworking project: ${detailedDescription}. The image should be well-lit and showcase the craftsmanship.`,
    });
    
    const imageUrl = imageResult.imageUrl;

    if (!imageUrl) {
      // Still return success with description if image fails
      return {
        success: true,
        description: detailedDescription,
        error: "Failed to generate project image, but description was created.",
      };
    }
    
    return {
      success: true,
      description: detailedDescription,
      imageUrl: imageUrl,
    };

  } catch (error) {
    console.error("AI Visualization Error:", error);
    let errorMessage = "An unexpected error occurred during visualization.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return {
      success: false,
      error: errorMessage,
    };
  }
}
