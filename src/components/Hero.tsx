import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';

const backgrounds = [
  'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595435934249-5df7ed86e1f4?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden rounded-b-[3rem] bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={backgrounds[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-black/60" />

      <Navbar />

      <div className="absolute inset-0 flex flex-col justify-between px-8 pb-12 pt-32">
        <div className="flex justify-between items-start w-full max-w-7xl mx-auto mt-12">
          <div className="max-w-xs text-white">
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-12 h-12 rounded-full border-2 border-black object-cover" alt="User" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-200 font-medium">
              Our intelligent training tools, event updates, and community-driven stories bring together athletes, teams, and fans to push performance beyond limits.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl flex items-center space-x-6 text-white max-w-sm">
            <div className="flex-1 pl-2">
              <div className="flex space-x-1.5 mb-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex % 4 ? 'bg-white' : 'bg-white/30'}`} />
                ))}
              </div>
              <h3 className="font-display text-2xl tracking-wide leading-tight mb-2">LIMITED SLOTS<br/>AVAILABLE</h3>
              <p className="text-xs text-gray-300 leading-relaxed">Our online training tools, event updates community driven stories connect.</p>
            </div>
            <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden">
              <img src={backgrounds[(currentIndex + 1) % backgrounds.length]} className="w-full h-full object-cover" alt="Next" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <h1 className="font-display text-[14vw] leading-[0.85] text-white tracking-tight uppercase">
            Sports<br/>Passion
          </h1>
        </div>
      </div>
    </div>
  );
}
