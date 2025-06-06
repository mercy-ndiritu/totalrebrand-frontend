import { Fuel, Zap, Building2, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Fuel,
      title: 'Fuel Stations',
      description: 'Premium fuel and services at over 500 stations across Kenya with 24/7 availability.',
      gradient: 'bg-gradient-to-br from-energy-primary to-energy-wind',
      features: ['Premium Fuels', '24/7 Service', 'Loyalty Rewards', 'Mobile Payment']
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Solar, wind, and hybrid energy solutions for residential and commercial needs.',
      gradient: 'bg-sustainable-gradient',
      features: ['Solar Power', 'Wind Energy', 'Energy Storage', 'Smart Grids']
    },
    {
      icon: Building2,
      title: 'Business Solutions',
      description: 'Comprehensive energy solutions tailored for businesses and industrial operations.',
      gradient: 'bg-gradient-to-br from-energy-accent to-energy-solar',
      features: ['Fleet Management', 'Bulk Supply', 'Energy Consulting', 'Custom Solutions']
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Environmental initiatives and carbon-neutral solutions for a greener future.',
      gradient: 'bg-gradient-to-br from-energy-secondary to-energy-primary',
      features: ['Carbon Offset', 'Green Initiatives', 'Circular Economy', 'Clean Technology']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-gray-200 mb-6">
            <Zap className="h-4 w-4 text-energy-primary" />
            <span className="text-sm font-medium text-gray-700">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="text-energy-primary">Comprehensive</span>{' '}
            <span className="text-energy-secondary">Energy Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional fuel services to cutting-edge renewable energy solutions, 
            we power Kenya's progress with reliable and sustainable energy options.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-energy-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-energy-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-energy-primary group-hover:text-white transition-all p-0 h-auto py-3"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Power Your Future?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Kenyan businesses and households already benefiting from our energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-energy-gradient hover:opacity-90 text-white px-8 py-4 rounded-full">
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-energy-primary text-energy-primary hover:bg-energy-primary bg-white hover:text-white px-8 py-4 rounded-full">
                Find Nearest Station
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;