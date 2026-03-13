import { ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: "Sportverse Velocity X1",
    price: "$129 USD",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587ce574?q=80&w=800&auto=format&fit=crop",
    bg: "bg-orange-100"
  },
  {
    id: 2,
    name: "Sportverse Velocity X1",
    price: "$129 USD",
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop",
    bg: "bg-teal-100"
  },
  {
    id: 3,
    name: "Sportverse Velocity X1",
    price: "$129 USD",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    bg: "bg-blue-100"
  },
  {
    id: 4,
    name: "Sportverse Velocity X1",
    price: "$129 USD",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=800&auto=format&fit=crop",
    bg: "bg-red-100"
  }
];

export default function Products() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border border-gray-200 rounded-full px-5 py-2.5 inline-block w-fit">Our Products</span>
          <p className="text-sm text-gray-500 mt-8 max-w-xs leading-relaxed">
            Whether you're training for your first race or your next championship.
          </p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.9]">
            AT SPORTVERSE, AI<br/>POWERS SMARTER<br/>TRAINING
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className={`relative ${product.bg} rounded-[2rem] p-6 aspect-square mb-6 overflow-hidden flex items-center justify-center`}>
              <button className="absolute top-5 right-5 w-12 h-12 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <motion.img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
