import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import Content from "../components/sections/home/Content";
import RevealSection from "../components/sections/home/RevealSection";
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
      <Content />
      <RevealSection />
      </section>
    </>
  );
}
