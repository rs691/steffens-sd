import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { ProjectCard } from '@/components/core/project-card';
import { TestimonialCard } from '@/components/core/testimonial-card';

// Mock data - replace with actual data fetching
const featuredProjects = [
  { id: '1', name: 'Custom Bookshelf', description: 'Elegant oak bookshelf with intricate carvings.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'bookshelf wood' },
  { id: '2', name: 'Dining Table Set', description: 'Rustic pine dining table with matching benches.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'dining table wood' },
  { id: '3', name: 'Entryway Bench', description: 'Handcrafted cherry wood bench with storage.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'bench wood' },
];

const sampleTestimonial = {
  id: '1',
  name: 'Jane Doe',
  testimonial: "Steffen's work is absolutely stunning! The custom cabinet he built for us transformed our living room. Exceptional quality and craftsmanship.",
  projectImageUrl: 'https://placehold.co/100x100.png',
  dataAiHint: 'living room cabinet'
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-background to-secondary rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-primary tracking-tight">
            Steffen's Showcase
          </h1>
          <p className="text-2xl mb-8 text-accent font-semibold">
            Quality Custom Made Woodworking For Your Home & Business
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
            Discover bespoke woodworking creations, meticulously crafted to bring warmth, beauty, and functionality to your space. Let us turn your vision into a timeless piece of art.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/gallery">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/visualizer">
                Try AI Visualizer <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="link" className="text-accent hover:text-accent/80 text-lg">
            <Link href="/gallery">
              Explore Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="bg-card p-8 md:p-12 rounded-xl shadow-lg">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-3xl font-semibold text-primary text-center">Crafting Dreams in Wood</CardTitle>
          <CardDescription className="text-center text-foreground/80 mt-2 text-md">
            Learn more about our passion for woodworking and commitment to quality.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-center text-foreground/90 mb-8 max-w-3xl mx-auto">
            At Steffen's Showcase, we believe that wood is more than just a material; it's a medium for storytelling and creating lasting impressions. With years of experience and a deep respect for the craft, we specialize in custom furniture, cabinetry, and unique wooden art pieces tailored to your individual style and needs. Our values are rooted in precision, durability, and sustainable practices.
          </p>
          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/about">
                Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </section>
      
      {/* Testimonial Highlight */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto">
          <TestimonialCard testimonial={sampleTestimonial} />
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="link" className="text-accent hover:text-accent/80 text-lg">
            <Link href="/testimonials">
              Read More Testimonials <Star className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
