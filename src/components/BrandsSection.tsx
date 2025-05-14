
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Brand {
  id: number;
  name: string;
  image: string;
}

// These are placeholder images that should be replaced with local images
const brands: Brand[] = [
  { id: 1, name: "TechCorp", image: "/brands/brand1.png" },
  { id: 2, name: "Innovate Labs", image: "/brands/brand2.png" },
  { id: 3, name: "Fusion Media", image: "/brands/brand3.png" },
  { id: 4, name: "Apex Design", image: "/brands/brand4.png" },
  { id: 5, name: "Echo Studios", image: "/brands/brand5.png" },
  { id: 6, name: "Vertex Group", image: "/brands/brand6.png" },
  { id: 7, name: "Pulse Dynamics", image: "/brands/brand7.png" },
  { id: 8, name: "Horizon Enterprises", image: "/brands/brand8.png" },
  { id: 9, name: "Quantum Solutions", image: "/brands/brand9.png" },
  { id: 10, name: "Nebula Networks", image: "/brands/brand10.png" }
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white">
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
                {/* Replace with actual brand logos when available */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* This is a placeholder. Replace with actual image */}
                  <img 
                    src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&fit=crop&q=80`} 
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
