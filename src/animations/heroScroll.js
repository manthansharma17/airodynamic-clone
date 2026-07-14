import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function heroScroll(hero) {
  return (
    gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          markers: true, 
        },
      })

      // Hero Text
      .to(
        ".hero-title",
        {
          y: -220,
          opacity: 0,
        },
        0,
      )

      // Desktop Search
      .to(
        ".hero-search",
        {
          y: -80,
          opacity: 0,
        },
        0,
      )

      // Mobile Button
      .to(
        ".hero-book-trigger",
        {
          y: -80,
          opacity: 0,
        },
        0,
      )

      // Clouds
      .to(
        ".cloud-track-2",
        {
          y: -220,
        },
        0,
      )

      .to(
        ".cloud-track-1",
        {
          y: -120,
        },
        0,
      )

      .to(
        ".cloud-track-0",
        {
          y: -60,
        },
        0,
      )

      // Sky Zoom
      .to(
        ".sky",
        {
          scale: 1.06,
        },
        0,
      )
  );
}
