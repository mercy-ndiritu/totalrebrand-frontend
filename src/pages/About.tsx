import { Award, Users, Globe, Leaf, Target, Heart, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety of our employees, customers, and communities in everything we do.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmental protection and sustainable energy solutions for future generations.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building strong relationships with local communities and contributing to Kenyan development.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering the highest quality products and services with continuous innovation and improvement.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Fuel Stations', description: 'Nationwide Coverage' },
    { number: '100MW', label: 'Clean Energy', description: 'Renewable Capacity' },
    { number: '2M+', label: 'Happy Customers', description: 'Trusted Daily' },
    { number: '50+', label: 'Years Experience', description: 'In Energy Sector' }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-energy-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">About</span>{' '}
              <span className="bg-energy-gradient bg-clip-text text-transparent">TotalEnergies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Kenya's energy transformation through innovation, sustainability, and unwavering commitment to our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold font-poppins mb-6">
                <span className="text-energy-primary">Our</span>{' '}
                <span className="text-energy-secondary">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  TotalEnergies Kenya has been at the forefront of the country's energy sector for over five decades, 
                  evolving from a traditional fuel company to a comprehensive energy solutions provider.
                </p>
                <p>
                  Today, we're proud to be Kenya's leading energy company, operating over 500 fuel stations nationwide 
                  while pioneering renewable energy solutions that will power the country's sustainable future.
                </p>
                <p>
                  Our commitment goes beyond business - we're dedicated to empowering communities, protecting the 
                  environment, and driving Kenya's economic growth through reliable, innovative energy solutions.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="relative bg-gradient-to-br from-energy-primary/10 to-energy-secondary/10 rounded-3xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={achievement.label} className="text-center">
                      <div className="text-3xl font-bold text-energy-primary mb-2">
                        {achievement.number}
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide reliable, sustainable, and innovative energy solutions that power Kenya's progress 
                  while contributing to a cleaner, more prosperous future for all.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sustainable-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Kenya's most trusted energy partner, leading the transition to sustainable energy 
                  while maintaining our commitment to excellence and community development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              <span className="text-energy-primary">Our</span>{' '}
              <span className="text-energy-secondary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-energy-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-poppins mb-6">A Message from Leadership</h2>
            <blockquote className="text-xl italic mb-8 text-gray-300">
              "At TotalEnergies Kenya, we believe that energy is more than fuel - it's the foundation of progress, 
              prosperity, and hope. Our commitment to Kenya's sustainable future drives every decision we make and 
              every solution we provide."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">John Doe</div>
              <div className="text-energy-secondary">Managing Director, TotalEnergies Kenya</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;