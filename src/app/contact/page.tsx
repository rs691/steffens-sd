import { ContactForm } from '@/components/features/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear about your project ideas or answer any questions you might have. Reach out to us using the form below or through our contact details.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-card p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
          <ContactForm />
        </section>

        <section className="space-y-8">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
            <ul className="space-y-4 text-foreground/90">
              <li className="flex items-start">
                <Mail className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:steffen@example.com" className="hover:text-primary transition-colors break-all">steffen@example.com</a>
                  <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
                  <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 5pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Workshop Location</h3>
                  <p>123 Woodwork Lane, Artisan City, ST 54321</p>
                  <p className="text-sm text-muted-foreground">Visits by appointment only.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Optionally, add a map here */}
          {/* <div className="bg-card p-4 rounded-lg shadow-xl h-64">
            <p className="text-center text-muted-foreground">Map Placeholder</p>
          </div> */}
        </section>
      </div>
    </div>
  );
}
