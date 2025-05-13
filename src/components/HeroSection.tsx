
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_VIDEO_ID" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-[#ff4c00]/20 rounded-full">
          <p className="text-white font-medium text-sm">Unleash Your Brand. Drive Engagement. Roar Online.</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Explosive social media content <br />
          that <span className="text-[#ff4c00]">actually converts</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          From auto to apparel, we build your brand presence where your audience lives: online.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Auto', 'Food & Beverage', 'Real Estate', 'Fashion', 'Institutions'].map((category) => (
            <span key={category} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
              {category}
            </span>
          ))}
        </div>
        
        <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 text-white px-8 py-6 h-auto text-lg font-medium rounded-md">
          Let's Talk Strategy <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
