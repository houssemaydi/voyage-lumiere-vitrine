
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif text-travel-700 font-bold">VoyageLumière</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-travel-600 font-medium">Accueil</Link>
          <Link to="/previous-trips" className="text-gray-700 hover:text-travel-600 font-medium">Voyages Précédents</Link>
          <Link to="/upcoming-trips" className="text-gray-700 hover:text-travel-600 font-medium">Voyages à Venir</Link>
          <Link to="/special-programs" className="text-gray-700 hover:text-travel-600 font-medium">Programmes Spéciaux</Link>
          <Link to="/booking" className="text-gray-700 hover:text-travel-600 font-medium">Réservation</Link>
          <Link to="/contact" className="text-gray-700 hover:text-travel-600 font-medium">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-travel-600">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-travel-600">
            <Instagram size={20} />
          </a>
          <Button variant="default" size="sm" className="bg-travel-600 hover:bg-travel-700">
            <Link to="/booking" className="text-white">Réserver</Link>
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 absolute top-16 left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Accueil</Link>
            <Link to="/previous-trips" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Voyages Précédents</Link>
            <Link to="/upcoming-trips" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Voyages à Venir</Link>
            <Link to="/special-programs" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Programmes Spéciaux</Link>
            <Link to="/booking" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Réservation</Link>
            <Link to="/contact" className="text-gray-700 hover:text-travel-600 py-2 font-medium" onClick={toggleMenu}>Contact</Link>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-travel-600">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-travel-600">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@voyagelumiere.com" aria-label="Email" className="text-gray-600 hover:text-travel-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
