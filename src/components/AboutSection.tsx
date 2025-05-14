import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
              <p className="text-[#ff4c00] text-sm font-medium">About Us</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Crafting Digital Experiences That <span className="text-[#ff4c00]">Resonate</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              We are a creative agency dedicated to crafting impactful digital experiences.
              From social media management to content creation, we help brands connect with their audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90">Learn More</Button>
              <Button variant="outline">Our Portfolio</Button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="About Us" 
              className="rounded-xl shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
