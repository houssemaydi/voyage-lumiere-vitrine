
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import TripCard, { TripCardProps } from '../components/TripCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

// Sample data for upcoming trips
const upcomingTrips: TripCardProps[] = [
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
  }
];

// Sample data for testimonials
const testimonials = [
  {
    name: 'Marie Dupont',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    text: 'Notre voyage en famille au Maroc était parfaitement organisé. Les hébergements, le guide et les activités étaient excellents. Nous reviendrons sûrement!',
    tripName: 'Maroc Authentique',
    rating: 5
  },
  {
    name: 'Thomas Martin',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    text: 'Le service VIP Assistant a fait toute la différence. Avoir un chauffeur et un guide privé nous a permis de profiter pleinement de notre voyage en Turquie.',
    tripName: 'Splendeurs de Turquie',
    rating: 4
  },
  {
    name: 'Sophie Lambert',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4',
    text: 'Les paiements en trois fois m\'ont permis de réaliser mon rêve de visiter le Japon. L\'organisation était impeccable et l\'itinéraire bien pensé.',
    tripName: 'Japon Traditionnel',
    rating: 5
  }
];

const Index: React.FC = () => {
  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Upcoming Trips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold font-serif">Voyages à Venir</h2>
              <Button variant="outline" asChild>
                <Link to="/upcoming-trips" className="flex items-center">
                  Voir tous <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingTrips.map(trip => (
                <div key={trip.id} className="staggered" style={{'--animation-order': trip.id} as React.CSSProperties}>
                  <TripCard {...trip} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Nos Services Spéciaux</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="staggered animate-fade-in" style={{'--animation-order': '1'} as React.CSSProperties}>
                <ServiceCard 
                  title="Forfaits Famille" 
                  description="Des voyages adaptés pour les familles avec activités pour enfants, hébergements familiaux et tarifs préférentiels."
                  imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                  linkTo="/special-programs/family"
                />
              </div>
              
              <div className="staggered animate-fade-in" style={{'--animation-order': '2'} as React.CSSProperties}>
                <ServiceCard 
                  title="Assistant VIP" 
                  description="Service de voiture privée avec chauffeur, guides personnels et expériences exclusives pour un confort optimal."
                  imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                  linkTo="/special-programs/vip"
                />
              </div>
              
              <div className="staggered animate-fade-in" style={{'--animation-order': '3'} as React.CSSProperties}>
                <ServiceCard 
                  title="Paiement en 3 fois" 
                  description="Facilitez votre voyage en divisant le coût en trois versements sans frais supplémentaires."
                  imageUrl="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6"
                  linkTo="/special-programs/payment"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Témoignages de Nos Voyageurs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="staggered animate-fade-in" style={{'--animation-order': index + 1} as React.CSSProperties}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-travel-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">Prêt à Découvrir le Monde?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez-nous pour des voyages extraordinaires et créez des souvenirs inoubliables avec VoyageLumière.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-travel-700 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
                <Link to="/upcoming-trips">Explorer nos voyages</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6 font-serif">
                Abonnez-vous à Notre Newsletter
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Recevez nos offres spéciales et les dernières nouvelles sur nos voyages
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent"
                  required
                />
                <Button type="submit" className="bg-travel-600 hover:bg-travel-700 px-8">
                  S'abonner
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
