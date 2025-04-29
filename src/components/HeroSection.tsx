
import React, { useState } from 'react';
import { CalendarDays, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const HeroSection = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Date de départ</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, 'dd/MM/yyyy', { locale: fr })
                  ) : (
                    <span className="text-muted-foreground">Date de départ</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  locale={fr}
                  disabled={(date) => 
                    // Disable dates in the past
                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                    // Disable dates after endDate if an endDate is selected
                    (endDate ? date > endDate : false)
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">Date de retour</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, 'dd/MM/yyyy', { locale: fr })
                  ) : (
                    <span className="text-muted-foreground">Date de retour</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  locale={fr}
                  disabled={(date) => 
                    // Disable dates in the past
                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                    // Disable dates before startDate if a startDate is selected
                    (startDate ? date < startDate : false)
                  }
                />
              </PopoverContent>
            </Popover>
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
