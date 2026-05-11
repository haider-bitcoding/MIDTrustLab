import Link from "next/link";

export default function JoinTheLab() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the MIDTrust Lab</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We are always looking for motivated PhD students, postdoctoral researchers, and collaborators 
          who are passionate about trustworthy AI and multimodal intelligence.
        </p>
        <Link 
          href="/contact" 
          className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
