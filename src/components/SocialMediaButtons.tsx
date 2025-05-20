
import React from 'react';
import { Instagram, Whatsapp } from 'lucide-react';

const SocialMediaButtons = () => {
  const openWhatsApp = () => {
    // Replace this with your actual WhatsApp number
    window.open('https://wa.me/1234567890', '_blank');
  };

  const openInstagram = () => {
    // Replace this with your actual Instagram URL
    window.open('https://instagram.com/yourusername', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Instagram Button */}
      <button 
        onClick={openInstagram}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Instagram"
      >
        <Instagram className="text-white w-6 h-6" />
      </button>
      
      {/* WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <Whatsapp className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialMediaButtons;
