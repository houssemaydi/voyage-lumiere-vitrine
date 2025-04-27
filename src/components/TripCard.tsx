
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface TripCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: number;
  startDate: string;
  endDate: string;
  featured?: boolean;
  seats?: number;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-TN', { style: 'currency', currency: 'TND' }).format(price);
};

const TripCard: React.FC<TripCardProps> = ({
  id,
  title,
  destination,
  image,
  price,
  startDate,
  endDate,
  featured,
  seats,
}) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  const formattedEndDate = new Date(endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  
  return (
    <div className={`trip-card rounded-lg overflow-hidden shadow-md bg-white ${featured ? 'border-2 border-travel-500' : ''}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover"
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-travel-600">
            Recommandé
          </Badge>
        )}
        {seats !== undefined && seats <= 5 && (
          <Badge className="absolute top-3 left-3 bg-red-500">
            Dernières places: {seats}
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold font-serif">{title}</h3>
          <div className="text-travel-700 font-bold">
            {formatPrice(price)}
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{destination}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{formattedStartDate} - {formattedEndDate}</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" asChild>
            <Link to={`/trip/${id}`}>Détails</Link>
          </Button>
          <Button className="bg-travel-600 hover:bg-travel-700" asChild>
            <Link to={`/booking/${id}`}>Réserver</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
