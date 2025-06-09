import { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, Leaf, Globe, Award, } from 'lucide-react';
import { Button } from '../components/ui/button';
import ImpactStoryModal from './ImpactStoryModal';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const HeroSection = () => {
  const [isImpactModalOpen, setIsImpactModalOpen] = useState(false);
  const [heroContent, setHeroContent] = useState({ title: '', heroText: '' });


   useEffect(() => {
    const fetchHero = async () => {
  const docRef = doc(db, 'pages', 'home');
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setHeroContent(docSnap.data() as { title: string; heroText: string });
    } else {
      console.warn('Home document not found.');
    }
  } catch (error) {
    console.error('Error fetching home document:', error);
  }
};

    fetchHero();
  }, []);
  
  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-energy-primary via-energy-secondary to-energy-accent opacity-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-energy-solar/20 rounded-full animate-energy-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-energy-wind/20 rounded-full animate-energy-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-energy-secondary/20 rounded-full animate-energy-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-energy-accent/20 rounded-full animate-energy-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-orange-100 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200">
                    <Award className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">#1 Energy Provider in Kenya</span>
                </div>
                
                {/* 🔁 Dynamic Title */}
                <h1 className="text-5xl lg:text-7xl font-bold font-poppins leading-tight">
                {heroContent.title ? (
                    <>
                    <span className="text-energy-primary">{heroContent.title.split(' ')[0]}</span>{' '}
                    <span className="text-energy-secondary">{heroContent.title.split(' ')[1]}</span>{' '}
                    <span className="bg-energy-gradient bg-clip-text text-transparent">
                        {heroContent.title.split(' ').slice(2).join(' ')}
                    </span>
                    </>
                ) : (
                    'Loading...'
                )}
                </h1>


                {/* 🔁 Dynamic Description */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {heroContent.heroText || 'Loading hero section...'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
               <Button 
                    size="lg" 
                    onClick={() => {
                        const section = document.getElementById('services');
                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-energy-gradient hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold group"
                    >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-energy-primary text-energy-primary hover:bg-energy-primary hover:text-white bg-white px-8 py-4 rounded-full font-semibold group"
                  onClick={() => setIsImpactModalOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Our Impact Story
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-energy-primary">500+</div>
                  <div className="text-sm text-gray-600">Fuel Stations</div>
                  <div className="text-xs text-energy-secondary">Nationwide Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-energy-secondary">100MW</div>
                  <div className="text-sm text-gray-600">Clean Energy</div>
                  <div className="text-xs text-energy-secondary">Renewable Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-energy-accent">2M+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                  <div className="text-xs text-energy-secondary">Trusted Daily</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-slide-in">
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Main Circle */}
                <div className="absolute inset-0 bg-energy-gradient rounded-full opacity-20 animate-energy-pulse"></div>
                
                {/* Energy Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Center Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <Zap className="h-10 w-10 text-energy-primary" />
                    </div>
                    
                    {/* Orbiting Icons */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-energy-pulse">
                      <Leaf className="h-6 w-6 text-energy-secondary" />
                    </div>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-energy-pulse delay-1000">
                      <Globe className="h-6 w-6 text-energy-wind" />
                    </div>
                    
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-energy-pulse delay-500">
                      <Zap className="h-6 w-6 text-energy-solar" />
                    </div>
                    
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-energy-pulse delay-1500">
                      <Leaf className="h-6 w-6 text-energy-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactStoryModal isOpen={isImpactModalOpen} onClose={() => setIsImpactModalOpen(false)} />
    </>
  );
};

export default HeroSection;