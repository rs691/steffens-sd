import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("h-10 w-10 fill-current text-primary", className)}
      aria-label="Steffen's Showcase Logo"
    >
      {/* Simple abstract wood grain / initial 'S' like shape */}
      <path 
        d="M60 10 C40 10, 30 25, 30 40 S 40 70, 60 70 C 70 70, 80 85, 80 90" 
        stroke="hsl(var(--primary))" 
        strokeWidth="8" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M40 90 C60 90, 70 75, 70 60 S 60 30, 40 30 C 30 30, 20 15, 20 10" 
        stroke="hsl(var(--accent))" 
        strokeWidth="8" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
       <circle cx="50" cy="50" r="4" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--primary))" strokeWidth="1"/>
    </svg>
  );
}
