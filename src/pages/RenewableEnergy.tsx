import { Zap, Sun, Wind, Battery, Leaf, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RenewableEnergy = () => {
  const solutions = [
    {
      icon: Sun,
      title: 'Solar Power Systems',
      description: 'Harness the power of the sun with our advanced solar panel installations for homes and businesses.',
      features: ['Residential Solar', 'Commercial Solar', 'Solar Farms', 'Maintenance Services'],
      capacity: '50MW+',
      efficiency: '22% Panel Efficiency'
    },
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'Clean wind energy solutions that convert natural wind power into sustainable electricity.',
      features: ['Wind Turbines', 'Wind Farms', 'Grid Integration', 'Monitoring Systems'],
      capacity: '30MW+',
      efficiency: '45% Capacity Factor'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery systems to store renewable energy for consistent power supply.',
      features: ['Li-ion Batteries', 'Grid Storage', 'Home Backup', 'Smart Management'],
      capacity: '20MWh+',
      efficiency: '95% Round-trip'
    },
    {
      icon: Zap,
      title: 'Smart Grid Solutions',
      description: 'Intelligent energy distribution systems that optimize renewable energy usage.',
      features: ['Smart Meters', 'Grid Optimization', 'Demand Response', 'Energy Analytics'],
      capacity: 'Scalable',
      efficiency: 'Real-time Control'
    }
  ];

  const benefits = [
    { icon: Leaf, title: 'Environmental Impact', description: 'Reduce carbon footprint by up to 80%' },
    { icon: TrendingUp, title: 'Cost Savings', description: 'Save 30-50% on energy bills' },
    { icon: Battery, title: 'Energy Independence', description: 'Reduce dependence on grid electricity' },
    { icon: CheckCircle, title: 'Reliability', description: '25+ year system lifespan' }
  ];

  const projects = [
    {
      name: 'Nairobi Solar Park',
      capacity: '20MW',
      type: 'Solar Farm',
      status: 'Operational',
      impact: '15,000 homes powered'
    },
    {
      name: 'Lake Turkana Wind',
      capacity: '310MW',
      type: 'Wind Farm',
      status: 'Operational',
      impact: '700,000 homes powered'
    },
    {
      name: 'Mombasa Hybrid',
      capacity: '15MW',
      type: 'Solar + Storage',
      status: 'Under Construction',
      impact: '12,000 homes powered'
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-energy-light to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-energy-solar/10 rounded-full animate-energy-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-energy-wind/10 rounded-full animate-energy-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">Renewable</span>{' '}
              <span className="bg-sustainable-gradient bg-clip-text text-transparent">Energy</span>{' '}
              <span className="text-gray-700">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading Kenya's transition to clean energy with innovative solar, wind, and storage solutions that power a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sustainable-gradient hover:opacity-90 text-white px-8 py-4 rounded-full">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-energy-primary text-energy-primary hover:bg-energy-primary bg-white hover:text-white px-8 py-4 rounded-full">
                Get Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">Clean Energy</span>{' '}
              <span className="text-energy-secondary">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive renewable energy solutions designed to meet Kenya's growing energy demands sustainably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-sustainable-gradient rounded-2xl flex items-center justify-center mb-4">
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{solution.title}</CardTitle>
                  <p className="text-gray-600 text-lg">{solution.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-energy-light rounded-lg">
                      <div className="text-lg font-bold text-energy-primary">{solution.capacity}</div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center p-3 bg-energy-light rounded-lg">
                      <div className="text-lg font-bold text-energy-secondary">{solution.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-energy-secondary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-sustainable-gradient hover:opacity-90 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">Why Choose</span>{' '}
              <span className="text-energy-secondary">Renewable Energy?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-energy-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              <span className="text-white">Our</span>{' '}
              <span className="text-energy-secondary">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming Kenya's energy landscape with large-scale renewable energy projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <span className="text-xs bg-energy-secondary text-white px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Capacity:</span>
                      <span className="text-energy-solar font-semibold">{project.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span>{project.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impact:</span>
                      <span className="text-energy-wind">{project.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-sustainable-gradient rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-poppins">Ready to Go Green?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Start your renewable energy journey today. Get a free assessment and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-energy-primary hover:bg-gray-100 px-8 py-4 rounded-full">
                Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-energy-primary px-8 py-4 rounded-full">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RenewableEnergy;