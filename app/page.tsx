import StorefrontCatalog from '@/components/StorefrontCatalog';
import CreatorListings from '@/components/CreatorListings';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <StorefrontCatalog />
      <CreatorListings />
    </main>
  );
}