import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h1>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((proj) => (
            <div key={proj.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{proj.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    proj.status === 'Ongoing' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {proj.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {proj.summary}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="text-sm">
                    <span className="font-bold text-gray-700">Theme:</span> {proj.theme}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-700">Collaborators:</span> {proj.collaborators.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
