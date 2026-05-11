import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ResearchPreview from "@/components/home/ResearchPreview";
import DirectorBlock from "@/components/home/DirectorBlock";
import JoinTheLab from "@/components/home/JoinTheLab";

export const metadata: Metadata = {
  title: "MIDTrust Lab | Home",
  description: "Multimodal Intelligence & Distributed Trust Lab at Shenzhen University of Information Technology. Advancing trustworthy, human-centered AI.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <ResearchPreview />
      <DirectorBlock />
      <JoinTheLab />
    </>
  );
}
