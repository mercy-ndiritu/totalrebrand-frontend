import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-energy-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-energy-secondary/10 rounded-full animate-energy-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-energy-accent/10 rounded-full animate-energy-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-energy-solar/10 rounded-full animate-energy-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 leading-tight">
                <span className="text-white">Ready to Power</span>{' '}
                <span className="bg-energy-gradient bg-clip-text text-transparent">Your Success?</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of satisfied customers across Kenya who trust TotalEnergies for their energy needs. 
                Get started today with our comprehensive energy solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-energy-gradient hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-energy-dark px-8 py-4 rounded-full font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-secondary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-energy-secondary" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">24/7 Support</div>
                  <div className="font-semibold">+254 700 000 000</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-energy-wind/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-energy-wind" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Find Us</div>
                  <div className="font-semibold">500+ Locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-energy-gradient rounded-full mx-auto flex items-center justify-center">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quick Response Time</h3>
                  <p className="text-gray-300">Get connected to our energy solutions in less than 24 hours</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-energy-solar">&lt; 1hr</div>
                    <div className="text-sm text-gray-400">Quote Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-energy-secondary">24/7</div>
                    <div className="text-sm text-gray-400">Customer Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-energy-wind">500+</div>
                    <div className="text-sm text-gray-400">Service Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;