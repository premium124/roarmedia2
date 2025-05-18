
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
              <p className="text-[#ff4c00] text-xs sm:text-sm font-medium">About Us</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Crafting Digital Experiences That <span className="text-[#ff4c00]">Resonate</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
              We are a creative agency dedicated to crafting impactful digital experiences.
              From social media management to content creation, we help brands connect with their audience.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 text-sm sm:text-base">Learn More</Button>
              <Button variant="outline" className="text-sm sm:text-base">Our Portfolio</Button>
            </div>
          </div>
          <div className="order-1 md:order-2 mb-6 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="About Us" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
