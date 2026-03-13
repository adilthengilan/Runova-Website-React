import { ArrowRight } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border border-gray-200 rounded-full px-5 py-2.5 inline-block mb-10">Contact Us</span>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] mb-16">
            RUNOVA INVITES YOU<br/>JOIN COMMUNITY
          </h2>
          
          <div className="relative max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className="w-full bg-transparent border-b border-gray-300 py-4 pr-14 text-lg focus:outline-none focus:border-black transition-colors"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="rounded-[3rem] overflow-hidden h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1000&auto=format&fit=crop" 
            alt="Community member" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
