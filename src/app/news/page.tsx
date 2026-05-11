import newsData from "@/data/news.json";

export default function NewsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">News & Activities</h1>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all flex flex-col md:flex-row">
              <div className="w-full md:w-64 aspect-video md:aspect-square relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-lab-gray text-primary text-xs font-bold rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>
                <button className="text-accent font-bold text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
