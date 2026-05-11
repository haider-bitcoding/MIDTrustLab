import siteConfig from "@/data/site-config.json";

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">About MIDTrust Lab</h1>
          
          <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Identity & Overview</h2>
              <p className="leading-relaxed">
                {siteConfig.labName} ({siteConfig.expandedName}) is an interdisciplinary university lab focused on trustworthy multimodal AI. 
                The lab explores how intelligent systems can integrate visual, linguistic, emotional, and contextual signals to better understand human communication. 
                At the same time, it investigates secure and decentralized approaches to strengthen data integrity, accountability, and trust in AI-enabled systems.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="leading-relaxed">
                  To advance trustworthy, human-centered AI systems that understand communication through multiple modalities while promoting security, transparency, privacy, accountability, and distributed trust.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="leading-relaxed">
                  To become a leading university lab in multimodal intelligence and trustworthy digital systems by connecting AI innovation with responsible, secure, and real-world impact.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Research Philosophy</h2>
              <p className="leading-relaxed">
                Our approach is rooted in the belief that AI should not only be powerful but also predictable, secure, and human-centric. 
                By combining state-of-the-art deep learning with rigorous security protocols and distributed trust mechanisms, we aim to build systems 
                that can be trusted in critical real-world applications.
              </p>
            </section>

            <section className="p-8 bg-primary text-white rounded-2xl mt-12">
              <h2 className="text-2xl font-bold mb-4">Institutional Affiliation</h2>
              <p className="leading-relaxed opacity-90">
                MIDTrust Lab is a proud part of the {siteConfig.institution} in Shenzhen, China. 
                We leverage the university's rich academic resources and strategic location in one of the world's most innovative technology hubs 
                to drive our research forward.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
