"use client";
import { useState } from "react";
import publicationsData from "@/data/publications.json";

export default function PublicationsPage() {
  const [yearFilter, setYearFilter] = useState("All");
  
  const years = ["All", ...new Set(publicationsData.map(p => p.year.toString()))].sort((a, b) => b.localeCompare(a));
  
  const filteredPubs = yearFilter === "All" 
    ? publicationsData 
    : publicationsData.filter(p => p.year.toString() === yearFilter);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Publications</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="flex justify-center gap-2 mb-8">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setYearFilter(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  yearFilter === year 
                    ? "bg-primary text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredPubs.map((pub) => (
            <div 
              key={pub.id} 
              className={`p-6 rounded-2xl border ${pub.featured ? 'border-accent bg-accent/5' : 'border-gray-100 bg-white'} hover:shadow-md transition-all`}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  {pub.featured && (
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">Featured</span>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {pub.authors.join(", ")}
                  </p>
                  <p className="text-gray-500 text-sm italic mb-4">
                    {pub.venue}, {pub.year}
                  </p>
                  <div className="flex gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={pub.link} 
                  className="px-4 py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors"
                >
                  PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
