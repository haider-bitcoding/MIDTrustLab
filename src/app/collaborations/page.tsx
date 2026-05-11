import siteConfig from "@/data/site-config.json";
import Link from "next/link";

export default function CollaborationsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Collaborations</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

          <div className="prose prose-lg text-gray-600 max-w-none space-y-12">
            <section className="text-center">
              <p className="text-xl leading-relaxed">
                MIDTrust Lab actively seeks partnerships with academic institutions, research centers, and industry leaders 
                to bridge the gap between theoretical research and real-world application.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Academic Partnerships</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span>•</span> Joint research projects and publications</li>
                  <li className="flex gap-2"><span>•</span> Visiting scholar exchange programs</li>
                  <li className="flex gap-2"><span>•</span> Co-supervision of graduate students</li>
                  <li className="flex gap-2"><span>•</span> Joint seminars and workshops</li>
                </ul>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Industry Collaboration</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span>•</span> Applied research for industrial challenges</li>
                  <li className="flex gap-2"><span>•</span> Technology transfer and licensing</li>
                  <li className="flex gap-2"><span>•</span> Collaborative funding for AI security</li>
                  <li className="flex gap-2"><span>•</span> Internship opportunities for students</li>
                </ul>
              </div>
            </div>

            <section className="p-12 bg-lab-gray rounded-3xl text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Interested in collaborating?</h2>
              <p className="text-gray-600 mb-8">
                We are open to discussing new ideas and potential partnerships. Please reach out to us.
              </p>
              <Link 
                href="/contact" 
                className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-accent/90 transition-all inline-block"
              >
                Send a Proposal
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
