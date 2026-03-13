import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const facilitiesList = [
  {
    id: 'indoor',
    title: 'Indoor Training Arena',
    description: 'Perfect for all-weather practice with AI-assisted performance tracking and smart temperature control.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbb1925536?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Running Track',
    description: 'Professional grade synthetic track with beautiful scenic views and elevation training options.',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'strength',
    title: 'Strength & Conditioning Zone',
    description: 'State-of-the-art equipment for power lifting, functional training, and core strengthening.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'recovery',
    title: 'Recovery & Wellness Studio',
    description: 'Ice baths, saunas, and professional physical therapy to keep you at peak performance.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  }
];

export default function FacilitiesDetails() {
  const [activeId, setActiveId] = useState('indoor');

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] mb-10">
            TAKE A LOOK AT<br/>FACILITIES
          </h2>
          <p className="text-sm text-gray-500 mb-16 max-w-md leading-relaxed">
            Whether you're training for your first race or your next championship, Runova keeps you motivated with world-class facilities designed to help you move smarter, faster, and stronger.
          </p>
          <div className="rounded-[2rem] overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1000&auto=format&fit=crop" 
              alt="Shoes and racket" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          {facilitiesList.map((facility) => {
            const isActive = activeId === facility.id;
            return (
              <div 
                key={facility.id} 
                className="border-b border-gray-200 pb-6 cursor-pointer"
                onClick={() => setActiveId(facility.id)}
              >
                <div className="flex justify-between items-center py-6">
                  <h3 className="text-2xl font-medium">{facility.title}</h3>
                  {!isActive && (
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row gap-8 pb-6 pt-2">
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            {facility.description}
                          </p>
                          <button className="flex items-center space-x-2 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                            <span>Get In Touch</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                          <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
