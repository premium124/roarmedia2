
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://drive.google.com/file/d/1V9mAVl6MC2MYFR5hg87WjSrd_h6LuzXH/preview"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
          allow="autoplay" 
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-block mb-4 sm:mb-6 px-3 py-1.5 bg-[#ff4c00]/20 rounded-full">
          <p className="text-white font-medium text-xs sm:text-sm">Unleash Your Brand. Drive Engagement. Roar Online.</p>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          Explosive social media content <br className="hidden sm:block" />
          that <span className="text-[#ff4c00]">actually converts</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto">
          From auto to apparel, we build your brand presence where your audience lives: online.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
          {['Auto', 'Food & Beverage', 'Real Estate', 'Fashion', 'Institutions'].map((category) => (
            <span key={category} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm border border-white/30">
              {category}
            </span>
          ))}
        </div>
        
        <Button 
          className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 text-white px-5 sm:px-8 py-2.5 sm:py-6 h-auto text-sm sm:text-base md:text-lg font-medium rounded-md"
          onClick={scrollToServices}
        >
          Let's Talk Strategy <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
