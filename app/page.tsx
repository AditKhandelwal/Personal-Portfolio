import Starfield from "@/components/Starfield";
import Panel from "@/components/Panel";
import Reveal from "@/components/Reveal";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Starfield />
      <div className="relative mx-auto max-w-[70rem] px-4 pb-24 sm:px-6 lg:px-8">
        <TopBar />

        <Hero />

        <main className="space-y-4 sm:space-y-6">
          <Reveal>
            <Panel>
              <About />
            </Panel>
          </Reveal>
          <Reveal>
            <Panel>
              <Projects />
            </Panel>
          </Reveal>
          <Reveal>
            <Panel>
              <Skills />
            </Panel>
          </Reveal>
          <Reveal>
            <Panel>
              <Experience />
            </Panel>
          </Reveal>
          <Reveal>
            <Panel>
              <Contact />
            </Panel>
          </Reveal>
        </main>
      </div>
    </>
  );
}
