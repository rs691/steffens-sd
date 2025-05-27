import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export type Testimonial = {
  id: string;
  name: string;
  testimonial: string;
  projectImageUrl?: string;
  dataAiHint?: string; // For placeholder image
  location?: string; // e.g., "City, State"
  rating?: number; // e.g. 4 or 5
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col h-full bg-card rounded-lg overflow-hidden">
      <CardHeader className="p-6 pb-2">
        {testimonial.projectImageUrl && (
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/50 shadow-md">
            <Image
              src={testimonial.projectImageUrl}
              alt={`Project for ${testimonial.name}`}
              width={96}
              height={96}
              objectFit="cover"
              data-ai-hint={testimonial.dataAiHint}
            />
          </div>
        )}
         <div className="flex justify-center mb-2">
          {testimonial.rating ? Array(testimonial.rating).fill(0).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
          )) : Array(5).fill(0).map((_, i) => ( // Default to 5 stars if no rating
             <Star key={i} className="h-5 w-5 text-accent fill-accent" />
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 text-center flex-grow">
        <Quote className="h-8 w-8 text-accent/50 mx-auto mb-4 transform rotate-180" />
        <p className="text-foreground/80 italic leading-relaxed mb-4">
          "{testimonial.testimonial}"
        </p>
        <Quote className="h-8 w-8 text-accent/50 mx-auto" />
      </CardContent>
      <CardFooter className="p-6 pt-2 bg-secondary/50">
        <div className="text-center w-full">
          <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
          {testimonial.location && <p className="text-sm text-muted-foreground">{testimonial.location}</p>}
        </div>
      </CardFooter>
    </Card>
  );
}
