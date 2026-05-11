import Hero from "@/components/home/Hero";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ResearchPreview from "@/components/home/ResearchPreview";
import DirectorBlock from "@/components/home/DirectorBlock";
import JoinTheLab from "@/components/home/JoinTheLab";

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
