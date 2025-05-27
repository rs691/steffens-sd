import { ProjectCard, type Project } from '@/components/core/project-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';

// Mock data - replace with actual data fetching in a real app
const allProjects: Project[] = [
  { id: '1', name: 'Custom Bookshelf', description: 'Elegant oak bookshelf with intricate carvings, designed to maximize storage and aesthetic appeal.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'bookshelf wood', detailsUrl: '/gallery/custom-bookshelf' },
  { id: '2', name: 'Dining Table Set', description: 'Rustic pine dining table with matching benches, perfect for family gatherings.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'dining table wood', detailsUrl: '/gallery/dining-table-set' },
  { id: '3', name: 'Entryway Bench', description: 'Handcrafted cherry wood bench with hidden storage, adding style and function to your entryway.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'bench wood', detailsUrl: '/gallery/entryway-bench' },
  { id: '4', name: 'Floating Shelves', description: 'Minimalist walnut floating shelves, ideal for modern interiors.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'floating shelves wood', detailsUrl: '/gallery/floating-shelves' },
  { id: '5', name: 'Custom Wardrobe', description: 'Spacious cedar wardrobe with custom compartments and soft-close drawers.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'wardrobe wood', detailsUrl: '/gallery/custom-wardrobe' },
  { id: '6', name: 'Kitchen Island', description: 'Butcher block kitchen island with ample storage and seating.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'kitchen island wood', detailsUrl: '/gallery/kitchen-island' },
  { id: '7', name: 'Coffee Table', description: 'Live-edge maple coffee table with hairpin legs.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'coffee table wood', detailsUrl: '/gallery/coffee-table' },
  { id: '8', name: 'Office Desk', description: 'Ergonomic standing desk made from reclaimed wood.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'office desk wood', detailsUrl: '/gallery/office-desk' },
];

export default function GalleryPage() {
  // In a real app, search and filter would be dynamic
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Project Gallery</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Browse through a collection of our finest custom woodworking projects. Each piece tells a story of craftsmanship and dedication.
        </p>
      </section>

      {/* Filters - TBD: Implement actual filtering logic */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
          <div className="relative w-full md:flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="search" placeholder="Search projects..." className="pl-10 w-full" />
          </div>
          <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <ListFilter className="h-5 w-5 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="cabinetry">Cabinetry</SelectItem>
                <SelectItem value="decor">Decor</SelectItem>
                <SelectItem value="outdoor">Outdoor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
