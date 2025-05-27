
"use client";
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart, Home, GalleryThumbnails, Users, Mail, Sparkles, HelpCircle, MessageSquare, StoreIcon } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { NavLink } from '@/components/shared/nav-link';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/gallery', label: 'Gallery', icon: <GalleryThumbnails className="h-5 w-5" /> },
  { href: '/about', label: 'About Us', icon: <Users className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  { href: '/visualizer', label: 'AI Visualizer', icon: <Sparkles className="h-5 w-5" /> },
  { href: '/faq', label: 'FAQ', icon: <HelpCircle className="h-5 w-5" /> },
  { href: '/testimonials', label: 'Testimonials', icon: <MessageSquare className="h-5 w-5" /> },
  { href: '/shop', label: 'Shop', icon: <StoreIcon className="h-5 w-5" /> },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" aria-label="Steffen's Showcase Home">
          <Logo />
          <span className="font-bold text-xl text-primary hidden sm:inline-block">Steffens Sign & Design</span>
        </Link>
        
        <div className="hidden md:flex flex-col items-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.slice(0,4).map(item => ( // Show first 4 items in desktop header
                <NavLink key={item.href} href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {item.label}
                </NavLink>
              ))}
          </nav>
           <p className="text-xs text-accent mt-1 hidden lg:block">Quality Custom Made Woodworking For Your Home & Business</p>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" aria-label="View Shopping Cart">
            <Button variant="ghost" size="icon" className="relative text-foreground/80 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
              {/* Optional: Add a badge for cart items count */}
              {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">3</span> */}
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground/80 hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-2 rounded-md p-2 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <p className="text-xs text-center text-accent pb-1 lg:hidden">Quality Custom Made Woodworking For Your Home & Business</p>
    </header>
  );
}
