"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/data/site-config.json";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/logo.png" 
            alt="MIDTrust Lab Logo" 
            width={120} 
            height={80} 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-bold text-primary text-lg leading-tight">{siteConfig.labName}</span>
            <span className="text-xs text-gray-500 leading-tight">{siteConfig.institution}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            className="bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors shadow-sm"
          >
            Join the Lab
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-200">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`text-sm font-medium p-2 rounded-lg transition-colors ${
                  isActive ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            className="bg-accent text-white px-4 py-3 rounded-lg text-center text-sm font-medium shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Join the Lab
          </Link>
        </nav>
      )}
    </header>
  );
}
