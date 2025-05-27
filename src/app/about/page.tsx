import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, ShieldCheck, Recycle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: 'Uncompromising Quality', description: 'We use only the finest materials and time-honored techniques to ensure every piece is built to last and exceed expectations.' },
    { icon: <Users className="h-8 w-8 text-accent" />, title: 'Client-Centric Approach', description: 'Your vision is our blueprint. We collaborate closely with you at every step, from design to delivery, ensuring your complete satisfaction.' },
    { icon: <Recycle className="h-8 w-8 text-accent" />, title: 'Sustainable Practices', description: 'We are committed to responsible sourcing and minimizing our environmental impact, creating beautiful pieces that are kind to the planet.' },
  ];

  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Steffen's Showcase</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Dedicated to the art of fine woodworking, we transform quality materials into functional art that enriches your home and business environments.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Steffen working in his workshop" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="woodworking workshop"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Story & Craftsmanship</h2>
          <p className="text-foreground/90 leading-relaxed">
            Steffen's Showcase was born from a lifelong passion for woodworking and a desire to create truly unique, handcrafted pieces. With decades of experience, Steffen brings a meticulous eye for detail and a deep understanding of wood's natural beauty to every project. 
          </p>
          <p className="text-foreground/90 leading-relaxed">
            We specialize in a wide array of custom projects, including bespoke furniture, elegant cabinetry, intricate decorative items, and robust business fixtures. Whether you're looking for a statement piece for your living room, a complete kitchen renovation, or unique branding elements for your commercial space, we bring the same level of dedication and artistry.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-primary text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
              <CardHeader className="items-center p-2">
                {value.icon}
                <CardTitle className="mt-4 text-xl text-primary">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-foreground/80 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground p-8 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Types of Projects We Undertake</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Custom Furniture (Tables, Chairs, Beds, etc.)",
            "Kitchen & Bathroom Cabinetry",
            "Built-in Shelving & Storage Solutions",
            "Home Office Setups",
            "Decorative Wood Art & Sculptures",
            "Commercial Fixtures & Displays",
            "Restoration of Antique Wooden Pieces",
            "Outdoor Wooden Structures (Pergolas, Benches)",
            "Personalized Gifts & Keepsakes"
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-background/50 rounded-md">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-md">
          Have a unique idea? We love a creative challenge! <a href="/contact" className="font-semibold text-primary hover:underline">Contact us</a> to discuss your custom project.
        </p>
      </section>
    </div>
  );
}
