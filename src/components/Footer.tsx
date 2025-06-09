import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        'Fuel Stations',
        'Renewable Energy',
        'Business Solutions',
        'Fleet Services',
        'Energy Consulting'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'News & Events',
        'Sustainability',
        'Investor Relations'
      ]
    },
    {
      title: 'Support',
      links: [
        'Customer Service',
        'Technical Support',
        'Safety Guidelines',
        'Emergency Contacts',
        'FAQ'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
        'Compliance',
        'Data Protection'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-energy-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-poppins">
                Stay Connected with Energy Updates
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest news on renewable energy, fuel prices, and sustainability initiatives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-energy-secondary"
              />
              <Button className="bg-energy-gradient hover:opacity-90 px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-energy-gradient">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div className="font-poppins">
                <div className="text-2xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-energy-secondary">Energies</span>
                </div>
                <div className="text-sm text-gray-400">Kenya</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading Kenya's energy transition with innovative solutions, sustainable practices, 
              and reliable services that power communities and businesses nationwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-energy-secondary" />
                <span>Nairobi, Kenya - Multiple Locations</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-energy-secondary" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-energy-secondary" />
                <span>info@totalenergies.co.ke</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-energy-secondary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 TotalEnergies Kenya. All rights reserved. | Powering Progress Sustainably.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-energy-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;