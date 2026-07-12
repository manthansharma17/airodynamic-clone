import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function heroScroll(hero) {
    
    gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=140%",
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
    },
  });

  tl.to(
    ".hero-title",
    {
      y: -500,
      opacity: 0,
    },
    0,
  )

    .to(
      ".hero-search",
      {
        y: -100,
        opacity:0,
      },
      0,
    )

    .to(
      ".cloud-track-2",
      {
        y: -420,
        
      },
      0,
    )

    .to(
      ".cloud-track-1",
      {
        y: -220,
        // scale: 1.1,
      },
      0,
    )

    .to(
      ".cloud-track-0",
      {
        y: -100,
      },
      0,
    )

    .to(
      ".sky",
      {
        scale: 1.08,
      },
      0,
    );
}
