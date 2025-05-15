
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Brand {
  id: number;
  name: string;
  image: string;
}

// Dummy brand data with logo placeholder images from Unsplash
const brands: Brand[] = [
  { id: 1, name: "TechCorp", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&fit=crop&q=80" },
  { id: 2, name: "Innovate Labs", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&fit=crop&q=80" },
  { id: 3, name: "Fusion Media", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&fit=crop&q=80" },
  { id: 4, name: "Apex Design", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&fit=crop&q=80" },
  { id: 5, name: "Echo Studios", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&fit=crop&q=80" },
  { id: 6, name: "Vertex Group", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&fit=crop&q=80" },
  { id: 7, name: "Pulse Dynamics", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&fit=crop&q=80" },
  { id: 8, name: "Horizon Enterprises", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&fit=crop&q=80" },
  { id: 9, name: "Quantum Solutions", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&fit=crop&q=80" },
  { id: 10, name: "Nebula Networks", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&fit=crop&q=80" }
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white" id="brands">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">Trusted Partners</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Brands We've Worked With
          </h2>
          <p className="text-gray-700 text-lg">
            Proud to have collaborated with these amazing companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="opacity-0 animate-fade-in w-full max-w-[180px]"
              style={{ 
                animationDelay: `${0.1 * brand.id}s`,
                animationFillMode: 'forwards'
              }}
            >
              <AspectRatio ratio={3/2} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">Want to be featured here? <a href="#contact" className="text-[#ff4c00] hover:underline">Contact us today</a></p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
