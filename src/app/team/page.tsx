import Image from "next/image";
import { Metadata } from "next";
import teamData from "@/data/team.json";

export const metadata: Metadata = {
  title: "Our Team | MIDTrust Lab",
  description: "Meet the researchers, students, and leadership of the Multimodal Intelligence & Distributed Trust Lab.",
};

export default function TeamPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Team</h1>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-square bg-gray-200 relative">
                {member.photo ? (
                  <Image 
                    src={member.photo} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Photo
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <span className="text-xs font-bold text-accent uppercase tracking-wide">{member.category}</span>
                <h3 className="text-xl font-bold text-primary mt-1 mb-2">{member.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


