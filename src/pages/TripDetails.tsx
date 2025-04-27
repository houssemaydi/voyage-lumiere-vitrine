
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Info, 
  Image, 
  CreditCard, 
  Home,
  Bus,
  Coffee,
  UtensilsCrossed
} from 'lucide-react';

// Sample trip data (normally would be fetched from an API)
const trips = [
  {
    id: '1',
    title: 'Séjour à Santorini',
    destination: 'Grèce',
    location: 'Santorini, Cyclades',
    images: [
      'https://images.unsplash.com/photo-1469796466635-455ede028aca',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca',
      'https://images.unsplash.com/photo-1469796466635-455ede028aca'
    ],
    price: 3400,
    startDate: '2025-06-15',
    endDate: '2025-06-22',
    duration: '8 jours / 7 nuits',
    availableSeats: 4,
    description: 'Découvrez les paysages à couper le souffle de Santorini, avec ses maisons blanches et ses toits bleus surplombant la mer Égée. Ce voyage vous permettra d\'explorer les villages pittoresques de l\'île, de déguster la cuisine grecque authentique et de vous détendre sur les plages volcaniques uniques.',
    highlights: [
      'Visite guidée d\'Oia et de ses couchers de soleil légendaires',
      'Excursion en bateau autour de la caldeira volcanique',
      'Dégustation de vins locaux dans un vignoble traditionnel',
      'Baignade dans les eaux cristallines de la plage Rouge',
      'Exploration des ruines antiques d\'Akrotiri'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrivée à Santorini',
        description: 'Accueil à l\'aéroport, transfert vers votre hôtel à Fira. Temps libre pour vous installer et vous familiariser avec les environs. Dîner de bienvenue avec vue sur la caldeira.'
      },
      {
        day: 2,
        title: 'Découverte de Fira',
        description: 'Visite guidée de la capitale de l\'île, Fira. Exploration de ses ruelles pittoresques, ses boutiques artisanales et ses panoramas spectaculaires.'
      },
      {
        day: 3,
        title: 'Excursion à Oia',
        description: 'Journée consacrée à la découverte du magnifique village d\'Oia, célèbre pour ses maisons blanches et ses dômes bleus. Coucher de soleil depuis le château vénitien.'
      },
      {
        day: 4,
        title: 'Croisière dans la caldeira',
        description: 'Excursion en bateau autour du volcan, avec arrêts pour se baigner dans les sources chaudes naturelles et explorer les îlots volcaniques.'
      },
      {
        day: 5,
        title: 'Plages et détente',
        description: 'Journée libre pour profiter des plages uniques de Santorini, comme la plage Rouge ou la plage Noire, formées par les laves volcaniques.'
      },
      {
        day: 6,
        title: 'Visite d\'Akrotiri',
        description: 'Exploration du site archéologique d\'Akrotiri, la « Pompéi grecque », une cité minoenne préservée sous les cendres volcaniques.'
      },
      {
        day: 7,
        title: 'Dégustation de vins et gastronomie locale',
        description: 'Visite d\'un vignoble traditionnel avec dégustation de vins locaux. Cours de cuisine grecque et déjeuner avec les ingrédients préparés.'
      },
      {
        day: 8,
        title: 'Départ',
        description: 'Temps libre selon l\'horaire de votre vol. Transfert vers l\'aéroport et assistance pour votre départ.'
      }
    ],
    included: [
      'Vols aller-retour Tunis-Santorin',
      'Hébergement en hôtel 4★ (7 nuits)',
      'Demi-pension (petits déjeuners et dîners)',
      'Transferts aéroport-hôtel',
      'Excursions mentionnées dans le programme',
      'Guide francophone'
    ],
    notIncluded: [
      'Déjeuners et boissons',
      'Pourboires et dépenses personnelles',
      'Assurance voyage'
    ],
    options: {
      family: {
        available: true,
        description: 'Notre forfait famille inclut des chambres communicantes, des activités adaptées aux enfants et des réductions pour les moins de 12 ans.',
        priceAdjustment: '-10% pour les enfants'
      },
      vip: {
        available: true,
        description: 'Surclassez votre voyage avec notre service VIP incluant un véhicule privé avec chauffeur, un guide personnel et des accès prioritaires aux sites.',
        priceAdjustment: '+850 TND'
      }
    }
  }
];

const TripDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the trip by ID
  const trip = trips.find(t => t.id === id);
  
  // If trip not found, show error
  if (!trip) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Voyage non trouvé</h1>
            <p className="text-gray-600 mb-6">Le voyage que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button asChild>
              <Link to="/upcoming-trips">Voir tous les voyages</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-TN', { style: 'currency', currency: 'TND' }).format(price);
  };
  
  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-travel-600">
                <Home size={15} className="inline mr-1" /> Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link to="/upcoming-trips" className="hover:text-travel-600">Voyages à venir</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{trip.title}</span>
            </div>
          </div>
        </div>
        
        {/* Trip Header */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-serif mb-2">{trip.title}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-1" />
                  <span>{trip.location}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-sm text-gray-600 mb-1">À partir de</div>
                <div className="text-3xl font-bold text-travel-700">{formatPrice(trip.price)}</div>
                <div className="text-sm text-gray-600">par personne</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trip Gallery */}
        <section className="bg-white pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <img 
                  src={trip.images[selectedImage]} 
                  alt={`${trip.title} - Photo principale`} 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {trip.images.slice(0, 2).map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${trip.title} - Photo ${index + 1}`}
                    className="w-full h-44 object-cover rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Trip Information Tabs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Trip Details & Booking */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview">
                  <TabsList className="w-full grid grid-cols-4 mb-8">
                    <TabsTrigger value="overview">Aperçu</TabsTrigger>
                    <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
                    <TabsTrigger value="included">Inclusions</TabsTrigger>
                    <TabsTrigger value="options">Options</TabsTrigger>
                  </TabsList>
                  
                  {/* Overview Tab */}
                  <TabsContent value="overview" className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold font-serif mb-4">À propos de ce voyage</h2>
                    <p className="text-gray-700 mb-6">{trip.description}</p>
                    
                    <h3 className="text-xl font-bold mb-3">Points forts</h3>
                    <ul className="space-y-2 mb-6">
                      {trip.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-travel-600 font-bold mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="text-travel-600 mr-3" size={20} />
                        <div>
                          <div className="font-medium">Dates</div>
                          <div className="text-gray-600">
                            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="text-travel-600 mr-3" size={20} />
                        <div>
                          <div className="font-medium">Durée</div>
                          <div className="text-gray-600">{trip.duration}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-travel-50 border border-travel-100 rounded-lg p-4">
                      <div className="flex items-center">
                        <Info className="text-travel-600 mr-3" size={20} />
                        <div>
                          <div className="font-medium">Places disponibles</div>
                          <div className="text-gray-600">
                            {trip.availableSeats <= 5 ? (
                              <span className="text-red-500 font-medium">
                                Plus que {trip.availableSeats} place{trip.availableSeats > 1 ? 's' : ''} !
                              </span>
                            ) : (
                              <span>{trip.availableSeats} places disponibles</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Itinerary Tab */}
                  <TabsContent value="itinerary" className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold font-serif mb-4">Itinéraire jour par jour</h2>
                    <div className="space-y-6">
                      {trip.itinerary.map((day) => (
                        <div key={day.day} className="border-l-4 border-travel-500 pl-4 pb-6">
                          <h3 className="text-xl font-bold mb-2">
                            Jour {day.day}: {day.title}
                          </h3>
                          <p className="text-gray-700">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Included Tab */}
                  <TabsContent value="included" className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold font-serif mb-4">Ce qui est inclus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center">
                          <Bus className="text-travel-600 mr-2" size={18} />
                          <span>Inclus dans le prix</span>
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {trip.included.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 font-bold mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center">
                          <Coffee className="text-travel-600 mr-2" size={18} />
                          <span>Non inclus</span>
                        </h3>
                        <ul className="space-y-2">
                          {trip.notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 font-bold mr-2">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Options Tab */}
                  <TabsContent value="options" className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold font-serif mb-4">Options supplémentaires</h2>
                    
                    <div className="space-y-8">
                      {/* Family Option */}
                      {trip.options.family.available && (
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2 flex items-center">
                                <Users className="text-travel-600 mr-2" size={18} />
                                <span>Forfait Famille</span>
                              </h3>
                              <p className="text-gray-700 mb-2">{trip.options.family.description}</p>
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                {trip.options.family.priceAdjustment}
                              </Badge>
                            </div>
                            <Button className="bg-travel-600 hover:bg-travel-700" asChild>
                              <Link to={`/booking/${id}?option=family`}>Sélectionner</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* VIP Option */}
                      {trip.options.vip.available && (
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2 flex items-center">
                                <UtensilsCrossed className="text-travel-600 mr-2" size={18} />
                                <span>Assistant VIP</span>
                              </h3>
                              <p className="text-gray-700 mb-2">{trip.options.vip.description}</p>
                              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                                {trip.options.vip.priceAdjustment}
                              </Badge>
                            </div>
                            <Button className="bg-travel-600 hover:bg-travel-700" asChild>
                              <Link to={`/booking/${id}?option=vip`}>Sélectionner</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Right Column - Booking Panel */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-2xl font-bold font-serif mb-4">Réserver ce voyage</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Prix par personne:</span>
                      <span className="font-bold">{formatPrice(trip.price)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Dates:</span>
                      <span>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Durée:</span>
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Places restantes:</span>
                      <Badge className={`${trip.availableSeats <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} hover:bg-inherit`}>
                        {trip.availableSeats}
                      </Badge>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div className="space-y-4">
                      <Button className="w-full bg-travel-600 hover:bg-travel-700 py-6 text-lg" asChild>
                        <Link to={`/booking/${id}`}>Réserver maintenant</Link>
                      </Button>
                      
                      <div className="bg-gray-50 rounded p-4">
                        <div className="flex items-center mb-2">
                          <CreditCard size={16} className="mr-2 text-travel-600" />
                          <span className="font-medium">Option de paiement en 3 fois</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Paiement initial de {formatPrice(trip.price * 0.3)} suivi de deux versements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TripDetails;
