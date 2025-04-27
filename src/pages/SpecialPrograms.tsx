
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpecialPrograms: React.FC = () => {
  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-travel-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 font-serif">Programmes Spéciaux</h1>
            <p className="text-xl max-w-3xl">
              Découvrez nos services exclusifs pour rendre votre voyage encore plus exceptionnel.
            </p>
          </div>
        </section>
        
        {/* Programs Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="family" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="family">Forfaits Famille</TabsTrigger>
                <TabsTrigger value="vip">Assistant VIP</TabsTrigger>
                <TabsTrigger value="payment">Paiement en 3 fois</TabsTrigger>
              </TabsList>
              
              {/* Family Packages Tab */}
              <TabsContent value="family">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" 
                      alt="Family enjoying vacation" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6 font-serif">Forfaits Famille</h2>
                    <p className="text-gray-700 mb-6">
                      Nos forfaits famille sont conçus pour offrir une expérience mémorable à toute la famille, avec des activités adaptées aux enfants et des hébergements familiaux.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Activités spécialement conçues pour les enfants de tout âge</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Hébergements familiaux avec chambres communicantes ou spacieuses</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Réductions pour les enfants de moins de 12 ans</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Guides spécialisés avec expérience dans l'animation pour enfants</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Menu adaptés pour les enfants dans les restaurants sélectionnés</span>
                      </li>
                    </ul>
                    
                    <Button className="bg-travel-600 hover:bg-travel-700" asChild>
                      <Link to="/upcoming-trips">Voir les voyages famille</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* VIP Assistant Tab */}
              <TabsContent value="vip">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-6 font-serif">Assistant VIP</h2>
                    <p className="text-gray-700 mb-6">
                      Voyagez avec style et confort grâce à notre service d'assistant VIP. Un service premium pour ceux qui souhaitent une expérience de voyage sans stress.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Voiture privée avec chauffeur pendant tout votre séjour</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Guide personnel parlant votre langue</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Accès prioritaire aux sites touristiques (quand c'est possible)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Réservations dans les meilleurs restaurants et établissements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Conciergerie disponible 24/7 pendant votre voyage</span>
                      </li>
                    </ul>
                    
                    <Button className="bg-travel-600 hover:bg-travel-700" asChild>
                      <Link to="/contact">Demander un devis</Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden order-1 md:order-2">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                      alt="VIP experience" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>
              
              {/* Payment Plans Tab */}
              <TabsContent value="payment">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6" 
                      alt="Payment plans" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-6 font-serif">Paiement en 3 fois</h2>
                    <p className="text-gray-700 mb-6">
                      Rendez votre rêve de voyage plus accessible grâce à notre option de paiement en trois fois sans frais. Planifiez maintenant, payez progressivement.
                    </p>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                      <h3 className="text-xl font-bold mb-4">Comment ça marche</h3>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>
                          <span className="font-medium">Premier versement:</span> 
                          <span className="block text-gray-600 ml-2">30% à la réservation pour garantir votre place</span>
                        </li>
                        <li>
                          <span className="font-medium">Deuxième versement:</span> 
                          <span className="block text-gray-600 ml-2">40% un mois avant le départ</span>
                        </li>
                        <li>
                          <span className="font-medium">Troisième versement:</span> 
                          <span className="block text-gray-600 ml-2">30% restants une semaine avant le départ</span>
                        </li>
                      </ol>
                    </div>
                    
                    <Button className="bg-travel-600 hover:bg-travel-700" asChild>
                      <Link to="/booking">Réserver avec paiement échelonné</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">Une Question sur Nos Services Spéciaux?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-700">
              Notre équipe est disponible pour vous fournir toutes les informations dont vous avez besoin.
            </p>
            <Button className="bg-travel-600 hover:bg-travel-700 px-8 py-6 text-lg" asChild>
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialPrograms;
