import Link from "next/link";
import siteConfig from "@/data/site-config.json";

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-4xl mb-6 shadow-lg">
          M
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 tracking-tight">
          {siteConfig.labName}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          {siteConfig.expandedName}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Advancing trustworthy, human-centered AI through multimodal intelligence, computer vision, language technologies, affective computing, cybersecurity, and distributed trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/research" 
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md"
          >
            Our Research
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
