
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, linkTo }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-6">
        <h3 className="text-xl font-bold mb-2 font-serif">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="p-6">
        <Button className="bg-travel-600 hover:bg-travel-700 w-full" asChild>
          <Link to={linkTo}>En savoir plus</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
