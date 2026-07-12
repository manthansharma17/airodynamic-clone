import { useEffect } from "react";
import Hero from "../components/sections/home/Hero";  
import Header from "../components/layout/Navbar"; 
import Content from "../components/sections/home/Content";

import initLenis from "../animations/lenis";


export default function Home() {
  useEffect(() => {
  const lenis = initLenis();

  return () => {
    lenis.destroy();
  };
}, []);
 
  return(
    <>
    <Hero />
    <Content />
    </>
  )

}
