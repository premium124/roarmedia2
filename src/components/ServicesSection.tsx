
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow h-full">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ff4c00]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
        <div className="text-[#ff4c00] text-lg sm:text-xl" dangerouslySetInnerHTML={{ __html: icon }}></div>
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h2>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '🚗',
      title: 'Automobile Marketing',
      description: 'From high-octane reels to test drive campaigns, we fuel your brand\'s social journey.'
    },
    {
      icon: '🍔',
      title: 'Food & Beverage Branding',
      description: 'Tasty visuals, drool-worthy stories, and campaigns that bring customers to your doorstep.'
    },
    {
      icon: '🏠',
      title: 'Real Estate Visibility',
      description: 'Property reels, walkthroughs, and client trust-building content.'
    },
    {
      icon: '👗',
      title: 'Fashion & Lifestyle',
      description: 'Trend-forward campaigns to capture Gen Z & Millennial buyers.'
    },
    {
      icon: '🎓',
      title: 'Institutional & Educational',
      description: 'From faculty intros to student stories — elevate your institute\'s presence.'
    }
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('work');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-section" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-xs sm:text-sm font-medium">What We Do</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Tailored Content Solutions That Convert
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            We create content that resonates with your audience and drives real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard
              key={index + 3}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90 text-sm sm:text-base" onClick={scrollToPortfolio}>
            See Our Work <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
