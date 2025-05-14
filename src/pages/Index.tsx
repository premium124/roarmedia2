
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import Portfolio from '@/components/Portfolio';
import TestimonialsSection from '@/components/TestimonialsSection';
import BrandsSection from '@/components/BrandsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Testimonials Section - Removing the gap by changing margin/padding */}
      <div className="-mt-10">
        <TestimonialsSection />
      </div>
      
      {/* Brands Section */}
      <BrandsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
