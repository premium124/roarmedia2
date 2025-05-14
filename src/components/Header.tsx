
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (menuOpen) setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-[#ff4c00]">Roar</span>
              <span className="text-white">Media</span>
            </h1>
          </div>
          
          {isMobile ? (
            <div>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </Button>
              
              {menuOpen && (
                <div className="fixed inset-0 top-16 bg-black z-40 p-4">
                  <nav className="flex flex-col space-y-4">
                    <a onClick={() => scrollToSection('about-section')} className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10 cursor-pointer">About</a>
                    <a onClick={() => scrollToSection('services-section')} className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10 cursor-pointer">Services</a>
                    <a onClick={() => scrollToSection('work')} className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10 cursor-pointer">Our Work</a>
                    <a onClick={() => scrollToSection('contact-section')} className="text-lg font-medium text-white hover:text-[#ff4c00] py-2 border-b border-white/10 cursor-pointer">Contact</a>
                    <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 mt-4" onClick={() => scrollToSection('contact-section')}>Get in Touch</Button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <>
              <nav className="hidden md:flex space-x-6">
                <a onClick={() => scrollToSection('about-section')} className="font-medium text-white hover:text-[#ff4c00] cursor-pointer">About</a>
                <a onClick={() => scrollToSection('services-section')} className="font-medium text-white hover:text-[#ff4c00] cursor-pointer">Services</a>
                <a onClick={() => scrollToSection('work')} className="font-medium text-white hover:text-[#ff4c00] cursor-pointer">Our Work</a>
                <a onClick={() => scrollToSection('contact-section')} className="font-medium text-white hover:text-[#ff4c00] cursor-pointer">Contact</a>
              </nav>
              <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90" onClick={() => scrollToSection('contact-section')}>Get in Touch</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
