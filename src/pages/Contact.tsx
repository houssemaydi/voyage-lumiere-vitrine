
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add contact form submission logic here
  };

  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-travel-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 font-serif">Contactez-nous</h1>
            <p className="text-xl max-w-3xl">
              Notre équipe est à votre écoute pour vous aider à planifier votre prochain voyage.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 font-serif">Nos Coordonnées</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-travel-600 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Adresse</h3>
                        <p className="text-gray-600">123 Avenue Habib Bourguiba, Tunis 1000, Tunisie</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-travel-600 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Téléphone</h3>
                        <p className="text-gray-600">+216 12 345 678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="text-travel-600 mr-4 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">contact@voyagelumiere.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 font-serif">Horaires d'Ouverture</h2>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 font-serif">Suivez-nous</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 font-serif">Envoyez-nous un Message</h2>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Sujet
                      </label>
                      <Input 
                        id="subject" 
                        type="text" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-travel-600 hover:bg-travel-700">
                        Envoyer le message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="h-96 bg-gray-200">
          <iframe 
            title="Google Map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.309113993356!2d10.1810583!3d36.8032426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sHabib%20Bourguiba%20Avenue%2C%20Tunis!5e0!3m2!1sen!2stn!4v1635000000000!5m2!1sen!2stn" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
