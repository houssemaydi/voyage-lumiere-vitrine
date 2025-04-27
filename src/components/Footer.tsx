
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1 - About */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">VoyageLumière</h3>
            <p className="text-gray-300 mb-4">
              Votre agence de voyages spécialisée pour des expériences inoubliables autour du monde.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-travel-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-travel-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@voyagelumiere.com" className="text-gray-300 hover:text-travel-400" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-travel-300">Accueil</Link></li>
              <li><Link to="/previous-trips" className="text-gray-300 hover:text-travel-300">Voyages Précédents</Link></li>
              <li><Link to="/upcoming-trips" className="text-gray-300 hover:text-travel-300">Voyages à Venir</Link></li>
              <li><Link to="/special-programs" className="text-gray-300 hover:text-travel-300">Programmes Spéciaux</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-travel-300">Réservation</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-travel-300">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Avenue Habib Bourguiba, Tunis 1000, Tunisie</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+216 12 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contact@voyagelumiere.com</span>
              </li>
            </ul>
          </div>

          {/* Section 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Abonnez-vous pour recevoir nos offres exclusives</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col space-y-2">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
                <Button type="submit" className="bg-travel-600 hover:bg-travel-700">
                  S'abonner
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VoyageLumière. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 text-sm hover:text-travel-300">Conditions d'utilisation</Link>
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-travel-300">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
