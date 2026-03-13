import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const facilities = [
  {
    id: 1,
    title: "Strengthen and stretch outdoors",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Hit the pavement and power through your daily run",
    subtitle: "Morning Run Track",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Strengthen and stretch outdoors",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Strengthen and stretch outdoors",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Facilities() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="font-display text-6xl md:text-8xl text-gray-300 uppercase tracking-tight leading-none">
          EXPLORE <span className="text-black">FACILITIES</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-xs pb-2 leading-relaxed">
          Whether you're training for your first race or your next championship, Runova keeps you motivated and connected.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[450px]">
        {facilities.map((facility) => (
          <motion.div 
            key={facility.id}
            className="relative rounded-[2rem] overflow-hidden group cursor-pointer"
            whileHover="hover"
            initial="initial"
          >
            <img 
              src={facility.image} 
              alt={facility.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
              <motion.div 
                variants={{
                  initial: { y: 20, opacity: 0 },
                  hover: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white"
              >
                {facility.subtitle && <span className="text-[10px] font-semibold uppercase tracking-wider mb-3 block opacity-80">{facility.subtitle}</span>}
                <p className="text-sm font-medium leading-snug">{facility.title}</p>
                <div className="mt-4 flex justify-end">
                  <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
