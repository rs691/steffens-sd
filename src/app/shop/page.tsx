import { ProductCard, type Product } from '@/components/core/product-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter, StoreIcon } from 'lucide-react';

// Mock data for products
const products: Product[] = [
  { id: 'p1', name: 'Handcarved Coasters (Set of 4)', description: 'Beautifully handcarved wooden coasters, perfect for protecting surfaces with style. Made from solid oak.', price: 45.00, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'wood coasters', category: 'Home Decor', detailsUrl: '/shop/handcarved-coasters' },
  { id: 'p2', name: 'Artisan Cutting Board', description: 'Durable and elegant end-grain cutting board. Maple and walnut construction.', price: 89.99, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'cutting board wood', category: 'Kitchenware', detailsUrl: '/shop/artisan-cutting-board' },
  { id: 'p3', name: 'Wooden Phone Stand', description: 'Sleek minimalist phone stand, handcrafted from cherry wood. Fits most smartphones.', price: 29.50, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'phone stand wood', category: 'Office', detailsUrl: '/shop/wooden-phone-stand' },
  { id: 'p4', name: 'Rustic Wall Clock', description: 'Charming rustic wall clock made from reclaimed barn wood. A unique statement piece.', price: 120.00, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'wall clock wood', category: 'Home Decor', detailsUrl: '/shop/rustic-wall-clock' },
  { id: 'p5', name: 'Small Jewelry Box', description: 'Elegant small jewelry box with velvet lining and intricate inlay work. Perfect for treasured items.', price: 75.00, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'jewelry box wood', category: 'Gifts', detailsUrl: '/shop/small-jewelry-box' },
  { id: 'p6', name: 'Hand-Turned Pen', description: 'Exquisite hand-turned wooden pen, a perfect gift for writers or professionals. Smooth writing experience.', price: 55.00, imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'wooden pen', category: 'Office', detailsUrl: '/shop/hand-turned-pen' },
];

export default function ShopPage() {
  // Actual filtering/searching would be implemented with state and effects
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <StoreIcon className="w-10 h-10 mr-3 text-accent" />
          Steffen's Shop
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover a selection of handcrafted wooden items ready to bring warmth and character to your space.
        </p>
      </section>

      {/* Filters and Search Bar */}
      <section className="mb-12">
         <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
          <div className="relative w-full md:flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-10 w-full" />
          </div>
          <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                 <ListFilter className="h-5 w-5 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="home-decor">Home Decor</SelectItem>
                <SelectItem value="kitchenware">Kitchenware</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="gifts">Gifts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
