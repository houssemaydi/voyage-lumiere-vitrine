
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

// Sample trip data (normally would be fetched from an API)
const trips = [
  {
    id: '1',
    title: 'Séjour à Santorini',
    destination: 'Grèce',
    price: 3400,
    startDate: '2025-06-15',
    endDate: '2025-06-22'
  }
];

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the trip by ID
  const trip = id ? trips.find(t => t.id === id) : null;
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelers: '1',
    paymentMethod: 'full',
    acceptTerms: false
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle radio change
  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, paymentMethod: value });
  };
  
  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, acceptTerms: checked });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Redirect to a confirmation page (for demo purposes)
    navigate('/booking-confirmation');
  };
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-TN', { style: 'currency', currency: 'TND' }).format(price);
  };
  
  // Calculate totals
  const calculateTotals = () => {
    if (!trip) return { basePrice: 0, totalPrice: 0 };
    
    const travelers = parseInt(formData.travelers);
    const basePrice = trip.price * travelers;
    
    return {
      basePrice,
      totalPrice: basePrice
    };
  };
  
  const totals = calculateTotals();

  return (
    <div>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-travel-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Réservation</h1>
            {trip ? (
              <p className="text-xl">
                {trip.title} - {new Date(trip.startDate).toLocaleDateString('fr-FR')} au {new Date(trip.endDate).toLocaleDateString('fr-FR')}
              </p>
            ) : (
              <p className="text-xl">Formulaire de réservation</p>
            )}
          </div>
        </section>
        
        {/* Booking Form */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {!trip && !id ? (
              <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 font-serif">Réservation générale</h2>
                <p className="mb-6">
                  Pour réserver un voyage spécifique, veuillez sélectionner un voyage depuis la page 
                  <Link to="/upcoming-trips" className="text-travel-600 hover:underline ml-1">Voyages à venir</Link>.
                </p>
              </div>
            ) : !trip ? (
              <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-red-600 font-serif">Voyage non trouvé</h2>
                <p className="mb-6">
                  Le voyage que vous essayez de réserver n'existe pas ou a été supprimé.
                </p>
                <Button asChild>
                  <Link to="/upcoming-trips">Voir tous les voyages</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6 font-serif">Informations de réservation</h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        {/* Personal Information */}
                        <div>
                          <h3 className="text-xl font-bold mb-4">Informations personnelles</h3>
                          
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <Label htmlFor="fullName">Nom complet</Label>
                              <Input 
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="phone">Téléphone</Label>
                              <Input 
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Trip Details */}
                        <div>
                          <h3 className="text-xl font-bold mb-4">Détails du voyage</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="travelers">Nombre de voyageurs</Label>
                              <Select 
                                value={formData.travelers}
                                onValueChange={(value) => handleSelectChange('travelers', value)}
                              >
                                <SelectTrigger id="travelers" className="w-full">
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num > 1 ? 'personnes' : 'personne'}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                        
                        {/* Payment Method */}
                        <div>
                          <h3 className="text-xl font-bold mb-4">Méthode de paiement</h3>
                          
                          <RadioGroup 
                            value={formData.paymentMethod}
                            onValueChange={handleRadioChange}
                            className="space-y-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="full" id="payment-full" />
                              <Label htmlFor="payment-full" className="cursor-pointer">
                                <span className="font-medium">Paiement complet</span>
                                <p className="text-sm text-gray-500">
                                  Payez la totalité du montant maintenant
                                </p>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="installments" id="payment-installments" />
                              <Label htmlFor="payment-installments" className="cursor-pointer">
                                <span className="font-medium">Paiement en 3 fois</span>
                                <p className="text-sm text-gray-500">
                                  Premier versement de {formatPrice(totals.basePrice * 0.3)} maintenant, puis deux versements supplémentaires
                                </p>
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        {/* Terms & Conditions */}
                        <div className="flex items-start space-x-3 pt-4">
                          <Checkbox 
                            id="terms"
                            checked={formData.acceptTerms}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                            J'accepte les conditions générales de vente et la politique de confidentialité.
                            Je reconnais avoir pris connaissance des informations relatives au voyage.
                          </Label>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-travel-600 hover:bg-travel-700 mt-6"
                          disabled={!formData.acceptTerms}
                        >
                          Confirmer la réservation
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-4 font-serif">Résumé de la commande</h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="font-medium">{trip.title}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Date:</span>
                        <span>
                          {new Date(trip.startDate).toLocaleDateString('fr-FR')} - {new Date(trip.endDate).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Prix par personne:</span>
                        <span>{formatPrice(trip.price)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Voyageurs:</span>
                        <span>{formData.travelers}</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Sous-total:</span>
                        <span>{formatPrice(totals.basePrice)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>{formatPrice(totals.totalPrice)}</span>
                      </div>
                      
                      {formData.paymentMethod === 'installments' && (
                        <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm">
                          <p className="font-medium mb-1">Paiement en 3 fois:</p>
                          <ul className="text-gray-600 space-y-1">
                            <li>1er versement: {formatPrice(totals.totalPrice * 0.3)} (aujourd'hui)</li>
                            <li>2ème versement: {formatPrice(totals.totalPrice * 0.4)} (30 jours)</li>
                            <li>3ème versement: {formatPrice(totals.totalPrice * 0.3)} (60 jours)</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
