
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div>
      <Header />
      
      <main className="min-h-screen flex items-center justify-center pt-16 pb-16">
        <div className="text-center px-4">
          <div className="text-9xl font-bold text-travel-700 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-6 font-serif">Page non trouvée</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Nous sommes désolés, mais la page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-travel-600 hover:bg-travel-700" size="lg" asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
