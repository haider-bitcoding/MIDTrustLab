import siteConfig from "@/data/site-config.json";

export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About the Lab</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {siteConfig.labName} ({siteConfig.expandedName}) is an interdisciplinary university lab focused on trustworthy multimodal AI. 
            The lab explores how intelligent systems can integrate visual, linguistic, emotional, and contextual signals to better understand human communication. 
            At the same time, it investigates secure and decentralized approaches to strengthen data integrity, accountability, and trust in AI-enabled systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To advance trustworthy, human-centered AI systems that understand communication through multiple modalities while promoting security, transparency, privacy, accountability, and distributed trust.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become a leading university lab in multimodal intelligence and trustworthy digital systems by connecting AI innovation with responsible, secure, and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
