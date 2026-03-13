import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-sm relative overflow-hidden">
        <div className="absolute top-16 right-16 w-56 h-56 rounded-[2rem] overflow-hidden hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop" 
            alt="Sport" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl">
          <div className="text-8xl text-gray-200 font-display leading-none mb-8">"</div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tight leading-[0.9] mb-20 max-w-3xl">
            "OVER A YEAR AT<br/>LOUVRE <span className="text-gray-300">THE BEST<br/>SPORTS CENTER</span> FOR<br/>FITNESS AND FUN!"
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="flex items-center space-x-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border border-gray-200 rounded-full px-5 py-2.5">Testimonial</span>
              <div className="flex items-center space-x-4">
                <img src="https://i.pravatar.cc/150?img=11" alt="Noah Carter" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">Noah Carter</h4>
                  <p className="text-xs text-gray-500">Managing Director</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
