import { Search, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white">
      <div className="text-3xl font-display tracking-wider">RUNOVA</div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
        <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Membership</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Event</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          <span>Join a Sport</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
