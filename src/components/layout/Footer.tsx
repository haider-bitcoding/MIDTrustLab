import Link from "next/link";
import siteConfig from "@/data/site-config.json";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="logo.png" 
              alt="MIDTrust Lab Logo" 
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <span className="font-bold text-lg">{siteConfig.labName}</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {siteConfig.expandedName}<br />
            {siteConfig.institution}<br />
            {siteConfig.location}
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {siteConfig.navigation.slice(1, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="text-sm text-gray-300">
            Email: <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">{siteConfig.contactEmail}</a>
          </p>
          <p className="text-sm text-gray-300">
            Part of {siteConfig.institution}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {siteConfig.labName}. All rights reserved.
      </div>
    </footer>
  );
}
