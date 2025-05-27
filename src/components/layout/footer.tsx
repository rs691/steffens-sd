import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Logo } from '@/components/shared/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="Steffen's Showcase Home">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-primary">Steffen's Showcase</span>
            </Link>
            <p className="text-sm">
              Quality Custom Made Woodworking For Your Home & Business.
            </p>
            <p className="text-sm mt-2">
              Email: <a href="mailto:steffen@example.com" className="hover:text-primary transition-colors">steffen@example.com</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Project Gallery</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="mailto:steffen@example.com" aria-label="Email" className="hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/60 text-center text-sm">
          <p>&copy; {currentYear} Steffen's Showcase. All rights reserved.</p>
          <p className="mt-1">Designed by an Expert Designer</p>
        </div>
      </div>
    </footer>
  );
}
