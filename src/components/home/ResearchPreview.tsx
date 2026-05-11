import Link from "next/link";
import Image from "next/image";
import researchData from "@/data/research.json";

export default function ResearchPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Research</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map((item) => (
            <div 
              key={item.id} 
              className="p-0 border border-gray-100 rounded-2xl hover:border-accent hover:shadow-xl transition-all group bg-white overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  href="/research" 
                  className="text-accent font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/research" 
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md"
          >
            View All Research Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
