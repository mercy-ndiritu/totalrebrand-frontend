import { Gift, Clock, ArrowRight, Percent } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const PromotionsSection = () => {
  const promotions = [
    {
      icon: Gift,
      title: "New Customer Bonus",
      description: "Get 500 KES fuel credit when you register for TotalEnergies Rewards",
      discount: "500 KES",
      validUntil: "March 31, 2024",
      gradient: "bg-gradient-to-br from-energy-accent to-energy-solar",
      ctaText: "Claim Now"
    },
    {
      icon: Percent,
      title: "Fleet Discount",
      description: "Save up to 15% on bulk fuel purchases for registered fleet customers",
      discount: "Up to 15%",
      validUntil: "Ongoing",
      gradient: "bg-sustainable-gradient",
      ctaText: "Learn More"
    },
    {
      icon: Clock,
      title: "Solar Installation",
      description: "Limited time offer: Free consultation and 10% off solar installation",
      discount: "10% OFF",
      validUntil: "April 15, 2024",
      gradient: "bg-gradient-to-br from-energy-primary to-energy-wind",
      ctaText: "Book Now"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-energy-light to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-energy-accent/20 mb-6">
            <Gift className="h-4 w-4 text-energy-accent" />
            <span className="text-sm font-medium text-gray-700">Special Offers</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="text-energy-accent">Exclusive</span>{' '}
            <span className="text-energy-primary">Promotions</span>{' '}
            <span className="text-gray-700">& Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and save on quality energy solutions across Kenya.
          </p>
        </div>

        {/* Promotions Grid */}
        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {promotions.map((promo, index) => (
            <div 
              key={promo.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden relative h-full flex flex-col"
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 z-10 shadow-sm">
                <span className="text-sm font-bold text-orange-600">{promo.discount}</span>
              </div>

              {/* Icon Header */}
              <div className={`${promo.gradient} h-20 sm:h-24 flex items-center justify-center relative`}>
                <promo.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white drop-shadow-lg" />
              </div>
              
              {/* Card Content */}
              <div className="p-5 lg:p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                  {promo.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                  {promo.description}
                </p>
                
                {/* Validity */}
                <div className="flex items-center text-xs lg:text-sm text-gray-500 pt-2 border-t border-gray-100">
                  <Clock className="h-3.5 w-3.5 lg:h-4 lg:w-4 mr-2 flex-shrink-0" />
                  <span>Valid until: {promo.validUntil}</span>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-105 flex items-center justify-center space-x-2 mt-4">
                  <span>{promo.ctaText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Newsletter Signup */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Never Miss a Deal
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive promotions, new services, and energy-saving tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-energy-secondary"
            />
            <Button className="bg-energy-gradient hover:opacity-90 text-white px-8 py-3 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;