
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestimonialCard from '../components/TestimonialCard';

interface PreviousTrip {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  date: string;
  testimonials?: {
    name: string;
    image: string;
    text: string;
    rating: number;
  }[];
}

// Sample data for previous trips
const previousTrips: PreviousTrip[] = [
  {
    id: '1',
    title: 'Splendeurs de Turquie',
    location: 'Turquie',
    description: 'Découverte des joyaux historiques et culturels de la Turquie, entre Istanbul, la Cappadoce et Pamukkale.',
    images: [
      'https://images.unsplash.com/photo-1589561253898-768105ca91a8',
      'https://images.unsplash.com/photo-1570854009561-c9b070555b7d',
      'https://images.unsplash.com/photo-1647568337294-c73ee42fc86f'
    ],
    date: 'Mai 2024',
    testimonials: [
      {
        name: 'Thomas Martin',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        text: 'Le service VIP Assistant a fait toute la différence. Avoir un chauffeur et un guide privé nous a permis de profiter pleinement de notre voyage en Turquie.',
        rating: 4
      }
    ]
  },
  {
    id: '2',
    title: 'Maroc Authentique',
    location: 'Maroc',
    description: 'Une immersion dans la culture marocaine, de Marrakech aux dunes du désert, en passant par les villages berbères.',
    images: [
      'https://images.unsplash.com/photo-1489493585363-d69421e0edd3',
      'https://images.unsplash.com/photo-1548013146-72479768bada',
      'https://images.unsplash.com/photo-1531003300514-1976154daf56'
    ],
    date: 'Avril 2024',
    testimonials: [
      {
        name: 'Marie Dupont',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
        text: 'Notre voyage en famille au Maroc était parfaitement organisé. Les hébergements, le guide et les activités étaient excellents. Nous reviendrons sûrement!',
        rating: 5
      },
      {
        name: 'Philippe Roux',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        text: 'Le circuit était bien pensé, nous permettant de découvrir tous les aspects du Maroc. Très bonne ambiance de groupe!',
        rating: 4
      }
    ]
  },
  {
    id: '3',
    title: 'Japon Traditionnel',
    location: 'Japon',
    description: 'Un voyage entre tradition et modernité, à la découverte de Tokyo, Kyoto, Osaka et des paysages magnifiques du Japon.',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9'
    ],
    date: 'Mars 2024',
    testimonials: [
      {
        name: 'Sophie Lambert',
        image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4',
        text: 'Les paiements en trois fois m\'ont permis de réaliser mon rêve de visiter le Japon. L\'organisation était impeccable et l\'itinéraire bien pensé.',
        rating: 5
      }
    ]
  },
  {
    id: '4',
    title: 'Mystères de Pétra',
    location: 'Jordanie',
    description: 'Exploration des trésors archéologiques de la Jordanie, incluant la cité perdue de Pétra et le désert de Wadi Rum.',
    images: [
      'https://images.unsplash.com/photo-1579606032821-4e6633774a48',
      'https://images.unsplash.com/photo-1586952205467-7852150a5d7e',
      'https://images.unsplash.com/photo-1544735716-daeb6f3516f8'
    ],
    date: 'Février 2024'
  }
];

const PreviousTrips: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTrips = previousTrips.filter(trip => 
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    trip.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-travel-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 font-serif">Voyages Précédents</h1>
            <p className="text-xl max-w-3xl">
              Découvrez les voyages déjà réalisés par notre agence et les témoignages de nos clients satisfaits.
            </p>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4 max-w-2xl">
            <Input 
              type="text" 
              placeholder="Rechercher par nom, destination ou description" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="gallery">Galerie</TabsTrigger>
                <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
              </TabsList>
              
              {/* Gallery Tab */}
              <TabsContent value="gallery">
                {filteredTrips.length > 0 ? (
                  <div className="grid grid-cols-1 gap-12">
                    {filteredTrips.map(trip => (
                      <div key={trip.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="p-6 md:p-8">
                          <h2 className="text-2xl font-bold font-serif mb-2">{trip.title}</h2>
                          <div className="flex items-center text-gray-600 mb-4">
                            <span>{trip.location}</span>
                            <span className="mx-2">•</span>
                            <span>{trip.date}</span>
                          </div>
                          <p className="text-gray-700 mb-6">{trip.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {trip.images.map((image, index) => (
                              <div key={index} className="rounded-lg overflow-hidden h-64">
                                <img 
                                  src={image} 
                                  alt={`${trip.title} - Image ${index + 1}`} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold mb-2">Aucun voyage trouvé</h3>
                    <p className="text-gray-600">
                      Veuillez modifier votre recherche pour voir plus de résultats
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Testimonials Tab */}
              <TabsContent value="testimonials">
                {filteredTrips.filter(trip => trip.testimonials && trip.testimonials.length > 0).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTrips
                      .filter(trip => trip.testimonials && trip.testimonials.length > 0)
                      .flatMap(trip => 
                        trip.testimonials!.map((testimonial, index) => (
                          <TestimonialCard
                            key={`${trip.id}-${index}`}
                            name={testimonial.name}
                            image={testimonial.image}
                            text={testimonial.text}
                            tripName={trip.title}
                            rating={testimonial.rating}
                          />
                        ))
                      )
                    }
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold mb-2">Aucun témoignage trouvé</h3>
                    <p className="text-gray-600">
                      Veuillez modifier votre recherche pour voir plus de résultats
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PreviousTrips;
