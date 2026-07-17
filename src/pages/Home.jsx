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
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about" ><StorySection /></section>
      <section id="services"> <Services /></section>
      <section id="insights"><Window /></section>
      <section id="model"><PlaneButton /></section>
      <section id="contact"><OverAeroSection />
      <InsightsSection />
      <InstagramSection />
      <Last /></section>
     
      
      
      
      
      
      
    </>
  );
}
