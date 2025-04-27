
import React from 'react';
import { CalendarDays, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Découvrez le Monde avec VoyageLumière
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Des voyages uniques pour des souvenirs inoubliables
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Button 
            className="bg-travel-600 hover:bg-travel-700 text-white px-8 py-6 text-lg rounded-md" 
            asChild
          >
            <Link to="/upcoming-trips">Voir nos voyages</Link>
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-md" 
            asChild
          >
            <Link to="/booking">Réserver maintenant</Link>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-4xl mx-auto mt-16 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg animate-fade-in" style={{animationDelay: "0.6s"}}>
        <h2 className="text-2xl font-serif text-gray-800 mb-4">Trouvez votre prochain voyage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner une destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asie</SelectItem>
                <SelectItem value="africa">Afrique</SelectItem>
                <SelectItem value="america">Amérique</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <div className="relative">
              <Input type="text" placeholder="Quand souhaitez-vous partir?" />
              <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex items-end">
            <Button className="w-full bg-travel-600 hover:bg-travel-700">
              <Search size={18} className="mr-2" /> Rechercher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
