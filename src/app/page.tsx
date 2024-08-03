import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroComponent";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-0">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
