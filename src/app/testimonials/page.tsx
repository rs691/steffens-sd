import { TestimonialCard, type Testimonial } from '@/components/core/testimonial-card';
import { MessageSquare, Star } from 'lucide-react';

// Mock data - replace with actual data fetching
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane & John D.',
    testimonial: "Steffen's craftsmanship is unparalleled. The custom dining table he built for us is the centerpiece of our home and a testament to his skill and attention to detail. We couldn't be happier!",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'dining room elegant',
    location: "New York, NY",
    rating: 5
  },
  {
    id: '2',
    name: 'Michael B.',
    testimonial: "I commissioned a set of bookshelves for my study, and Steffen delivered beyond my expectations. The quality of the wood, the precision of the joinery, and the overall aesthetic are simply perfect. Highly recommended!",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'study bookshelf',
    location: "Chicago, IL",
    rating: 5
  },
  {
    id: '3',
    name: 'Sarah L.',
    testimonial: "The team at Steffen's Showcase was a pleasure to work with from start to finish. They listened to my ideas for a custom kitchen island and brought it to life beautifully. It's both functional and a work of art.",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'kitchen island modern',
    location: "Austin, TX",
    rating: 5
  },
   {
    id: '4',
    name: 'David K.',
    testimonial: "I needed a unique reception desk for my new office, and Steffen designed and built a stunning piece that perfectly captures our brand's essence. The quality and impact it has made are fantastic.",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'office reception desk',
    location: "San Francisco, CA",
    rating: 4
  },
  {
    id: '5',
    name: 'Emily R.',
    testimonial: "The custom vanity Steffen built for our bathroom renovation is gorgeous. The wood is beautiful, and the craftsmanship is top-notch. It has completely elevated the space.",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'bathroom vanity',
    location: "Miami, FL",
    rating: 5
  },
   {
    id: '6',
    name: 'The Coffee Corner',
    testimonial: "Steffen's team outfitted our new cafe with custom tables and a beautiful service counter. The quality is exceptional, and our customers constantly compliment the woodwork. It created the warm, inviting atmosphere we were hoping for.",
    projectImageUrl: 'https://placehold.co/150x150.png',
    dataAiHint: 'cafe interior wood',
    location: "Seattle, WA",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <Star className="w-10 h-10 mr-3 text-accent" />
          Client Testimonials
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Hear from our satisfied clients about their experiences with Steffen's Showcase and the quality of our custom woodworking.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
      
      <section className="text-center mt-16 py-10 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-primary mb-4">Share Your Experience</h2>
        <p className="text-foreground/80 max-w-xl mx-auto mb-6">
          Have a piece from Steffen's Showcase? We'd love to hear your story and see how it has enhanced your space.
        </p>
        <a 
          href="/contact?subject=Testimonial Submission" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-accent-foreground bg-accent hover:bg-accent/90 transition-colors"
        >
          Submit Your Testimonial <MessageSquare className="ml-2 h-5 w-5" />
        </a>
      </section>
    </div>
  );
}
