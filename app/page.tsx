import Starfield from "@/components/Starfield";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="relative mx-auto max-w-column px-6">
        <TopBar />
        <main>
          <Hero />
          <SelectedWork />
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}
