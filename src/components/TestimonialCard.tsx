
import React from 'react';
import { 
  Card,
  CardContent,
  CardHeader
} from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  tripName: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, text, tripName, rating }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <Card className="h-full shadow-md">
      <CardHeader className="p-6">
        <div className="flex items-center mb-1">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-medium">{name}</h4>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">{tripName}</span>
              <div className="flex">{renderStars(rating)}</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-gray-700 italic">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
