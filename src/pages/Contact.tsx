import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Customer Service',
      details: '+254 700 000 000',
      description: 'Available round the clock for all your energy needs'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'info@totalenergies.co.ke',
      description: 'Get detailed responses within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: 'Nairobi, Kenya',
      description: 'Visit us at our corporate headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      description: 'Extended hours available for emergencies'
    }
  ];

  const offices = [
    {
      city: 'Nairobi',
      address: 'TotalEnergies House, Westlands',
      phone: '+254 700 000 001',
      type: 'Head Office'
    },
    {
      city: 'Mombasa',
      address: 'Moi Avenue, Mombasa',
      phone: '+254 700 000 002',
      type: 'Regional Office'
    },
    {
      city: 'Kisumu',
      address: 'Oginga Odinga Street, Kisumu',
      phone: '+254 700 000 003',
      type: 'Regional Office'
    },
    {
      city: 'Nakuru',
      address: 'Kenyatta Avenue, Nakuru',
      phone: '+254 700 000 004',
      type: 'Regional Office'
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
              <span className="text-energy-primary">Get in</span>{' '}
              <span className="bg-energy-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your energy needs. Reach out to our expert team for support, consultations, or partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card 
                key={contact.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-energy-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <div className="text-energy-primary font-semibold mb-2">{contact.details}</div>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-poppins mb-8">
                <span className="text-energy-primary">Send us a</span>{' '}
                <span className="text-energy-secondary">Message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent">
                    <option>Select a service</option>
                    <option>Fuel Stations</option>
                    <option>Renewable Energy</option>
                    <option>Business Solutions</option>
                    <option>Fleet Services</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-secondary focus:border-transparent"
                    placeholder="Tell us about your energy needs..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-energy-gradient hover:opacity-90 text-white py-3 text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold font-poppins mb-8">
                <span className="text-energy-primary">Our</span>{' '}
                <span className="text-energy-secondary">Locations</span>
              </h2>
              
              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.city} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-energy-secondary/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-energy-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{office.city}</h3>
                            <span className="text-xs bg-energy-light text-energy-primary px-2 py-1 rounded-full">
                              {office.type}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{office.address}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Phone className="h-4 w-4 mr-2" />
                            {office.phone}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Support</h3>
                  <p className="text-red-600 mb-4">24/7 emergency assistance available</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Emergency Hotline: +254 700 HELP (4357)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;