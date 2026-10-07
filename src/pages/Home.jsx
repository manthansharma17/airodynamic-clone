import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenis } from "../animations/lenis";
import Hero from "../components/sections/home/Hero";
import StorySection from "../components/sections/About/StorySection";
import Services from "../components/sections/Services/Services";
import Window from "../components/sections/WindowAnimation/Plane";
import PlaneButton from "../components/sections/model/PlaneButton";
import OverAeroSection from "../components/sections/InstaLast/OverAero";
import InsightsSection from "../components/sections/insight/InsightsSection";
import InstagramSection from "../components/sections/InstaLast/InstagramSection";
import Last from "../components/sections/InstaLast/last";

export default function Home() {
  const { hash } = useLocation();

  // Navbar links from other routes land on "/#section"; scroll there once the
  // pinned sections have been laid out.
  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      lenis.resize();
      lenis.scrollTo(hash, { immediate: true });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><StorySection /></section>
      <section id="services"><Services /></section>
      <section id="experience"><Window /></section>
      <section id="model"><PlaneButton /></section>
      <OverAeroSection />
      <section id="insights"><InsightsSection /></section>
      <InstagramSection />
      <section id="contact"><Last /></section>
    </>
  );
}
