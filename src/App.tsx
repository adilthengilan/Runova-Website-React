import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import FacilitiesDetails from './components/FacilitiesDetails';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Hero />
      <About />
      <Facilities />
      <Products />
      <Testimonial />
      <FacilitiesDetails />
      <Community />
      <Footer />
    </div>
  );
}
