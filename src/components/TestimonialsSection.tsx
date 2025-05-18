
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Elevate Digital",
    quote: "The photography work exceeded all our expectations. Our campaign saw a 40% increase in engagement thanks to the stunning visuals delivered."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Lead",
    company: "Artisan Studios",
    quote: "Working with this team has transformed our brand identity. The attention to detail and artistic vision brought our concepts to life perfectly."
  },
  {
    id: 3,
    name: "Amelia Rodriguez",
    role: "CEO",
    company: "Fusion Restaurants",
    quote: "Our food photography has never looked so appetizing. Since our menu rebrand, we've noticed customers ordering more items they see in our promotional materials."
  },
  {
    id: 4,
    name: "Daniel Thompson",
    role: "Product Manager",
    company: "Nexus Technologies",
    quote: "The product shots were stunning and helped us achieve a record-breaking product launch. Professional, timely, and creative throughout the entire process."
  },
  {
    id: 5,
    name: "Olivia Williams",
    role: "Event Coordinator",
    company: "Stellar Events",
    quote: "Our charity gala was captured beautifully. The photos truly conveyed the emotion and impact of the evening, helping us raise even more for next year's event."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">What Clients Say</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Client Testimonials
          </h2>
          <p className="text-gray-700 text-lg">
            Hear what our satisfied clients have to say about their experience working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className={index === activeIndex ? 'block' : 'hidden'}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col items-center text-center">
                        <Quote className="h-10 w-10 text-[#ff4c00] mb-6" />
                        
                        <blockquote className="mb-6">
                          <p className="text-xl md:text-2xl italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                        </blockquote>
                        
                        <div>
                          <p className="font-bold text-lg text-black">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-[#ff4c00]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
