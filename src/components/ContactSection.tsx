
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">Get In Touch</p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
            Contact Us <span className="text-[#ff4c00]">Today</span> 🐯
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            We're ready to help you achieve your marketing goals. Reach out and let's start the conversation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              <p className="text-gray-700 mb-6 md:mb-8">
                Have questions or want to discuss a potential project? Here are all the ways you can reach us.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#ff4c00] p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Email Us</p>
                    <a href="mailto:hello@roarmedia.com" className="text-[#ff4c00] hover:underline">hello@roarmedia.com</a>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ff4c00] p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Call Us</p>
                    <a href="tel:+919876543210" className="text-[#ff4c00] hover:underline">+91 98765 43210</a>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Monday-Friday, 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#ff4c00] p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Visit Our Office</p>
                    <p className="text-gray-700">123 Creative Avenue,<br />Tech Park, Bengaluru 560103</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Open for meetings by appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 h-full flex items-center justify-center mt-6 md:mt-0">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Roar Louder?</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Let our experts help you craft a content strategy that converts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
