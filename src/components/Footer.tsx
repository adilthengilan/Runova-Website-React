export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-[3rem] pt-32 pb-12 px-8 mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <p className="text-gray-400 mb-6 text-sm">Ready to host your next tournament?</p>
          <h2 className="font-display text-[16vw] leading-[0.8] tracking-tight uppercase">
            LET'S GO!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-white/10 pt-16">
          <div className="md:col-span-4">
            <h3 className="font-display text-4xl tracking-wider mb-8">RUNOVA</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Whether you're training for your first race or your next championship, Runova keeps motivated with world-class facilities designed
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col space-y-5">
              <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Membership</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Event</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            <div className="flex flex-col space-y-5">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Changelog</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Help Center</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
            </div>
            <div className="flex flex-col space-y-5">
              <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Help Center</a>
              <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-32 text-xs text-gray-500">
          <p>Copyright 2025 Runova</p>
          <p>All right reserved @ 2025 thought.com</p>
        </div>
      </div>
    </footer>
  );
}
