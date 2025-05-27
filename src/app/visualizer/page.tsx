"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Lightbulb, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { visualizeProject } from "./actions"; // Server action

export default function AiVisualizerPage() {
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!projectIdea.trim()) {
      toast({
        title: "Input Required",
        description: "Please describe your project idea.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setDescription("");
    setImageUrl("");

    try {
      const result = await visualizeProject(projectIdea);
      if (result.success) {
        setDescription(result.description || "No description generated.");
        setImageUrl(result.imageUrl || "");
        toast({
          title: "Visualization Complete!",
          description: "Your project idea has been visualized.",
        });
      } else {
        toast({
          title: "Error Visualizing Project",
          description: result.error || "Could not generate visualization. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Visualization error:", error);
      toast({
        title: "An Unexpected Error Occurred",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <Sparkles className="w-10 h-10 mr-3 text-accent" />
          AI Project Visualizer
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Have a custom woodworking project in mind? Describe your idea, and let our AI help you visualize it by generating a detailed description and a unique image.
        </p>
      </section>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-primary" />
            Describe Your Dream Project
          </CardTitle>
          <CardDescription>
            Be as descriptive as possible for the best results. Mention style, materials, size, or any specific features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Textarea
              placeholder="e.g., A rustic live-edge walnut coffee table with black metal legs, approximately 4ft long and 2ft wide..."
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              rows={5}
              className="resize-y bg-background"
              disabled={isLoading}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Visualizing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Visualize Project
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center space-y-4 py-8">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="text-lg text-foreground/80">Our AI is crafting your vision... Please wait.</p>
        </div>
      )}

      {(description || imageUrl) && !isLoading && (
        <section className="space-y-8 mt-12">
          <h2 className="text-3xl font-semibold text-primary text-center">Your Visualization</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {description && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                    AI Generated Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            )}
            {imageUrl && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2 text-primary" />
                    AI Generated Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative w-full rounded-md overflow-hidden border border-border">
                    <Image 
                      src={imageUrl} 
                      alt="AI generated project visualization" 
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="custom furniture"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">Note: This is an AI-generated conceptual image.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
