import Starfield from "@/components/Starfield";
import Panel from "@/components/Panel";
import Reveal from "@/components/Reveal";
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
      <div className="relative mx-auto max-w-[1120px] px-4 pb-24 sm:px-6 lg:px-8">
        <TopBar />

        <Hero />

        <main className="space-y-4 sm:space-y-6">
          <Reveal>
            <Panel>
              <SelectedWork />
            </Panel>
          </Reveal>
          <Reveal>
            <Panel>
              <About />
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
