import { ArrowUpRight, Plus } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8 block">About Runova</span>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-8 max-w-sm leading-relaxed">
              Whether you're training for your first race or your next championship, Runova keeps you motivated and connected.
            </p>
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.2] mb-20">
            At Runova, we redefine how athletes train and perform. From personalized workout plans to real-time progress tracking.
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=2070&auto=format&fit=crop" 
                alt="Tennis balls" 
                className="w-full h-48 object-cover rounded-[2rem]"
              />
              <img 
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop" 
                alt="Tennis player" 
                className="w-full h-72 object-cover rounded-[2rem]"
              />
            </div>
            <div className="flex flex-col justify-end space-y-6">
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                Get access to upcoming events, expert insights, and stories from athletes across the globe.
              </p>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34f8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tennis court" 
                  className="w-full h-72 object-cover rounded-[2rem]"
                />
                <button className="absolute -left-6 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full hover:scale-110 transition-transform shadow-xl">
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
