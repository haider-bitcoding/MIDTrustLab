import siteConfig from "@/data/site-config.json";
import teamData from "@/data/team.json";
import Image from "next/image";
import Link from "next/link";

export default function DirectorBlock() {
  const director = teamData.find(m => m.role === "Director");

  return (
    <section className="py-20 bg-lab-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl relative">
            {director?.photo ? (
              <Image 
                src={director.photo} 
                alt={director.name} 
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                Photo Placeholder
              </div>
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Lab Director</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{siteConfig.director.name}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {siteConfig.director.bio}
            </p>
            <Link 
              href="/team" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              View Full Profile <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

