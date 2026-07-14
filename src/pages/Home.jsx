import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import StorySection from "../components/sections/home/StorySection";
// import Content from "../components/sections/home/Content";
// import About from "../components/sections/home/About";
// import Gallery from "../components/sections/home/Gallery";
// import RevealSection from "../components/sections/home/RevealSection";
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
        {/* <Content /> */}
        {/* <RevealSection /> */}
      </section>
    </>
  );
}
