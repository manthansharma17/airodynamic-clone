import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";
import StorySection from "../components/sections/home/StorySection";
import Services from "../components/sections/home/Services";
import Window from "../components/sections/home/Plane";
import initLenis from "../animations/lenis";
import PlaneButton from "../components/sections/home/PlaneButton";
import OverAeroSection from "../components/sections/home/OverAero";
import InsightsSection from "../components/sections/home/InsightsSection";
import InstagramSection from "../components/sections/home/InstagramSection";
import Last from "../components/sections/home/last";

export default function Home() {
  useEffect(() => {
    const cleanup = initLenis();

    return cleanup;
  }, []);

  return (
    <>
    
        <>
          <Hero />
          <StorySection />
          <Services />
          <Window />
          <PlaneButton />
          <OverAeroSection />
          <InsightsSection />
          <InstagramSection />
          <Last />

        </>
      
    </>
  );
}
