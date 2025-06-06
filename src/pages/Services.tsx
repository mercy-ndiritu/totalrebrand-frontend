import { Fuel, Zap, Building2, Leaf, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Fuel,
      title: 'Fuel Stations',
      description: 'Premium fuel and services at over 500 stations across Kenya with 24/7 availability.',
      gradient: 'bg-gradient-to-br from-energy-primary to-energy-wind',
      features: ['Premium Fuels', '24/7 Service', 'Loyalty Rewards', 'Mobile Payment'],
      locations: '500+ Stations',
      availability: '24/7 Service'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Solar, wind, and hybrid energy solutions for residential and commercial needs.',
      gradient: 'bg-sustainable-gradient',
      features: ['Solar Power', 'Wind Energy', 'Energy Storage', 'Smart Grids'],
      locations: '100MW Capacity',
      availability: 'Clean Energy'
    },
    {
      icon: Building2,
      title: 'Business Solutions',
      description: 'Comprehensive energy solutions tailored for businesses and industrial operations.',
      gradient: 'bg-gradient-to-br from-energy-accent to-energy-solar',
      features: ['Fleet Management', 'Bulk Supply', 'Energy Consulting', 'Custom Solutions'],
      locations: '2000+ Clients',
      availability: 'B2B Solutions'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmental initiatives and carbon-neutral solutions for a greener future.',
      gradient: 'bg-gradient-to-br from-energy-secondary to-energy-primary',
      features: ['Carbon Offset', 'Green Initiatives', 'Circular Economy', 'Clean Technology'],
      locations: 'Nationwide',
      availability: 'Eco-Friendly'
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-energy-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">Our</span>{' '}
              <span className="bg-energy-gradient bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions that power Kenya's progress with reliability, innovation, and sustainability at the forefront.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 rounded-3xl ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-energy-primary transition-colors mb-4">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-energy-secondary" />
                      <span>{service.locations}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-energy-secondary" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-energy-secondary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-energy-gradient hover:opacity-90 text-white group-hover:scale-105 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-energy-primary to-energy-secondary rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our team today to discuss your energy needs and discover the perfect solution for your business or home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-energy-primary hover:bg-gray-100 px-8 py-4 rounded-full">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-energy-primary px-8 py-4 rounded-full">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;