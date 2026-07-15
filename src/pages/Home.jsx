import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import StorySection from "../components/sections/home/StorySection";
import Services from "../components/sections/home/Services";
import Window from "../components/sections/home/Plane";
import initLenis from "../animations/lenis";

export default function Home() {
  useEffect(() => {
    const cleanup = initLenis();

    return cleanup;
  }, []);

  return (
    <>
      <section>
        <Hero />
        <StorySection />
        <Services />
        <Window />

      </section>
    </>
  );
}
