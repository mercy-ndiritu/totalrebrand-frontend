import { useState } from 'react';
import { ArrowRight, Fuel, Sun, Zap, FlameKindling } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceDetailModal from '../components/ServiceDetailModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productCategories = [
    {
      title: 'Fuels',
      icon: Fuel,
      description: 'High-quality automotive and industrial fuels designed for optimal performance and efficiency.',
      image: '/fuels.png',
      products: ['Premium Gasoline', 'Diesel', 'Jet Fuel', 'Marine Fuels', 'Heating Oil'],
      features: [
        'Advanced fuel additives for engine protection',
        'Consistent quality and performance',
        'Wide distribution network',
        'Environmental compliance standards'
      ],
      benefits: [
        'Enhanced engine performance and longevity',
        'Improved fuel efficiency',
        'Reduced emissions',
        'Reliable supply chain'
      ]
    },
    {
      title: 'Lubricants',
      icon: Zap,
      description: 'Premium lubricants and oils for automotive, industrial, and marine applications.',
      image: '/lubricant.png',
      products: ['Engine Oils', 'Transmission Fluids', 'Hydraulic Oils', 'Grease', 'Industrial Lubricants'],
      features: [
        'Advanced synthetic formulations',
        'Temperature and pressure resistance',
        'Long-lasting protection',
        'Multiple viscosity grades'
      ],
      benefits: [
        'Extended equipment life',
        'Reduced maintenance costs',
        'Improved operational efficiency',
        'Superior protection under extreme conditions'
      ]
    },
    {
      title: 'Solar Solutions',
      icon: Sun,
      description: 'Complete solar energy systems for residential, commercial, and industrial applications.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      products: ['Solar Panels', 'Inverters', 'Battery Storage', 'Solar Water Heaters', 'Off-grid Systems'],
      features: [
        'High-efficiency solar panels',
        'Smart monitoring systems',
        'Weather-resistant design',
        'Scalable solutions'
      ],
      benefits: [
        'Reduced electricity bills',
        'Clean renewable energy',
        'Energy independence',
        'Government incentives available'
      ]
    },
    {
      title: 'TotalEnergies Gas',
      icon: FlameKindling,
      description: 'Clean and efficient LPG solutions for cooking, heating, and industrial applications.',
      image: '/Total-Gas.jpg',
      products: ['Cooking Gas', 'Industrial LPG', 'Bulk Gas Supply', 'Gas Cylinders', 'Gas Accessories'],
      features: [
        'Pure LPG with consistent quality',
        'Safe and reliable delivery',
        'Multiple cylinder sizes',
        'Emergency support services'
      ],
      benefits: [
        'Clean burning fuel',
        'Cost-effective energy solution',
        'Convenient home delivery',
        'Excellent safety standards'
      ]
    }
  ];

  const handleLearnMore = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-energy-primary via-energy-secondary to-energy-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover our comprehensive range of energy solutions designed to power your life and business
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category) => (
              <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-energy-primary">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Our Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.slice(0, 3).map((product, index) => (
                        <span key={index} className="bg-energy-light text-energy-primary px-3 py-1 rounded-full text-sm">
                          {product}
                        </span>
                      ))}
                      {category.products.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          +{category.products.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleLearnMore(category)}
                    className="w-full bg-energy-gradient hover:opacity-90 text-white"
                  >
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
      <section className="py-16 bg-energy-light">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-energy-primary mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect energy solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-energy-gradient hover:opacity-90 text-white">
              Contact Our Experts
            </Button>
            <Button variant="outline">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {selectedProduct && (
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;