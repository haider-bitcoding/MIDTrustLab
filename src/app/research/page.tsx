import Image from "next/image";
import { Metadata } from "next";
import researchData from "@/data/research.json";

export const metadata: Metadata = {
  title: "Research | MIDTrust Lab",
  description: "Explore the core research themes of MIDTrust Lab, from Multimodal Intelligence to Distributed Trust.",
};

export default function ResearchPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Research</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on the intersection of multimodal intelligence and distributed trust, building AI systems that are both capable and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {researchData.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-12 items-start p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4">{item.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map(kw => (
                    <span key={kw} className="px-3 py-1 bg-lab-gray text-primary text-xs font-semibold rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


