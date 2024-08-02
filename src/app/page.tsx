import Image from "next/image";
import HeroSection from "./hero/page";
import AboutMe from "./about-me/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Footer from "./footer/page";

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
