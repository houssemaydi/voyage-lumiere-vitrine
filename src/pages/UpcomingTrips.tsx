
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TripCard, { TripCardProps } from '../components/TripCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Filter, FilterX } from 'lucide-react';

// Sample data for upcoming trips
const allTrips: TripCardProps[] = [
  {
    id: '1',
    title: 'Séjour à Santorini',
    destination: 'Grèce',
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca',
    price: 3400,
    startDate: '2025-06-15',
    endDate: '2025-06-22',
    featured: true,
    seats: 4
  },
  {
    id: '2',
    title: 'Safari en Tanzanie',
    destination: 'Tanzanie',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    price: 4900,
    startDate: '2025-07-10',
    endDate: '2025-07-20',
  },
  {
    id: '3',
    title: 'Découverte des temples de Bali',
    destination: 'Indonésie',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    price: 3850,
    startDate: '2025-08-05',
    endDate: '2025-08-15',
    seats: 2
  },
  {
    id: '4',
    title: 'Tour du Japon',
    destination: 'Japon',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    price: 5600,
    startDate: '2025-09-12',
    endDate: '2025-09-26',
  },
  {
    id: '5',
    title: 'Aventure au Costa Rica',
    destination: 'Costa Rica',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144',
    price: 3200,
    startDate: '2025-08-20',
    endDate: '2025-08-30',
    seats: 8
  },
  {
    id: '6',
    title: 'Magie de Marrakech',
    destination: 'Maroc',
    image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3',
    price: 2800,
    startDate: '2025-10-05',
    endDate: '2025-10-12',
  }
];

const destinations = ['Tous', 'Grèce', 'Tanzanie', 'Indonésie', 'Japon', 'Costa Rica', 'Maroc'];

const UpcomingTrips: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('Tous');
  const [priceRange, setPriceRange] = useState([2000, 6000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  
  const filteredTrips = allTrips.filter(trip => {
    // Filter by search term
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         trip.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by destination
    const matchesDestination = selectedDestination === 'Tous' || trip.destination === selectedDestination;
    
    // Filter by price range
    const matchesPrice = trip.price >= priceRange[0] && trip.price <= priceRange[1];
    
    return matchesSearch && matchesDestination && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'date-asc':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      case 'date-desc':
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      case 'recommended':
      default:
        return a.featured ? -1 : b.featured ? 1 : 0;
    }
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDestination('Tous');
    setPriceRange([2000, 6000]);
    setSortBy('recommended');
  };

  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-travel-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 font-serif">Voyages à Venir</h1>
            <p className="text-xl max-w-3xl">
              Découvrez nos voyages à venir et réservez votre place pour une expérience inoubliable avec VoyageLumière.
            </p>
          </div>
        </section>
        
        {/* Filter Section - Desktop */}
        <section className="bg-white py-8 shadow-md border-b hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold">Filtres</h2>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2" 
                  onClick={resetFilters}
                >
                  <FilterX size={16} />
                  Réinitialiser
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommandés</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    <SelectItem value="date-asc">Date (plus proche)</SelectItem>
                    <SelectItem value="date-desc">Date (plus lointaine)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              <div className="md:col-span-4">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Rechercher
                </label>
                <Input 
                  id="search"
                  type="text" 
                  placeholder="Rechercher par nom ou destination" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="md:col-span-3">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                  <SelectTrigger id="destination">
                    <SelectValue placeholder="Toutes les destinations" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map(destination => (
                      <SelectItem key={destination} value={destination}>
                        {destination}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fourchette de prix: {priceRange[0]} TND - {priceRange[1]} TND
                </label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    min={2000}
                    max={6000}
                    step={100}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="py-6"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>2000 TND</span>
                  <span>6000 TND</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section - Mobile */}
        <section className="bg-white py-4 shadow-md border-b md:hidden">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Collapsible 
                open={showMobileFilters} 
                onOpenChange={setShowMobileFilters}
                className="w-full"
              >
                <div className="flex justify-between items-center">
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Filter size={16} />
                      Filtres
                    </Button>
                  </CollapsibleTrigger>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommandés</SelectItem>
                      <SelectItem value="price-asc">Prix ↑</SelectItem>
                      <SelectItem value="price-desc">Prix ↓</SelectItem>
                      <SelectItem value="date-asc">Date ↑</SelectItem>
                      <SelectItem value="date-desc">Date ↓</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <CollapsibleContent className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="mobile-search" className="block text-sm font-medium text-gray-700 mb-1">
                      Rechercher
                    </label>
                    <Input 
                      id="mobile-search"
                      type="text" 
                      placeholder="Nom ou destination" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile-destination" className="block text-sm font-medium text-gray-700 mb-1">
                      Destination
                    </label>
                    <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                      <SelectTrigger id="mobile-destination">
                        <SelectValue placeholder="Toutes les destinations" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map(destination => (
                          <SelectItem key={destination} value={destination}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix: {priceRange[0]} - {priceRange[1]} TND
                    </label>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        min={2000}
                        max={6000}
                        step={100}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="py-6"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>2000 TND</span>
                      <span>6000 TND</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full flex items-center justify-center gap-2" 
                    onClick={resetFilters}
                  >
                    <FilterX size={16} />
                    Réinitialiser les filtres
                  </Button>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
        
        {/* Trips Listing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredTrips.length > 0 ? (
              <>
                <p className="text-gray-600 mb-8">
                  {filteredTrips.length} voyage{filteredTrips.length > 1 ? 's' : ''} trouvé{filteredTrips.length > 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTrips.map(trip => (
                    <TripCard key={trip.id} {...trip} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-2">Aucun voyage trouvé</h3>
                <p className="text-gray-600">
                  Veuillez modifier vos filtres pour voir plus de résultats
                </p>
              </div>
            )}
          </div>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default UpcomingTrips;
