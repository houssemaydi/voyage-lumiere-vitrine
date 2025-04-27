
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="service-card rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 font-serif">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Button className="bg-travel-600 hover:bg-travel-700 w-full" asChild>
          <Link to={linkTo}>En savoir plus</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
