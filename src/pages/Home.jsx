import Navbar from "../components/layout/Navbar";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef(null);

  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);

  useGSAP(() => {
    //---------------------------------------
    // Infinite Loop
    //---------------------------------------

    gsap.to(cloud1.current, {
      xPercent: -50,
      duration: 80,
      ease: "none",
      repeat: -1,
    });

    gsap.to(cloud2.current, {
      xPercent: -50,
      duration: 55,
      ease: "none",
      repeat: -1,
    });

    gsap.to(cloud3.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    //---------------------------------------
    // Floating
    //---------------------------------------

    gsap.to(".cloud-layer", {
      y: -12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    //---------------------------------------
    // Mouse Parallax
    //---------------------------------------

    const hero = heroRef.current;

    const moveClouds = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(cloud1.current, {
        x: x * 20,
        y: y * 8,
        duration: 1,
        overwrite: "auto",
      });

      gsap.to(cloud2.current, {
        x: x * 40,
        y: y * 12,
        duration: 1,
        overwrite: "auto",
      });

      gsap.to(cloud3.current, {
        x: x * 70,
        y: y * 18,
        duration: 1,
        overwrite: "auto",
      });
    };

    hero.addEventListener("mousemove", moveClouds);

    return () => hero.removeEventListener("mousemove", moveClouds);
  });

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Sky */}
      <img
        src="/images/sky.webp"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* FAR */}
      <div
        ref={cloud1}
        className="cloud-layer absolute bottom-0 flex w-[200%] h-[32%] opacity-40 blur-md"
      >
        <img src="/images/far1.webp" className="w-1/2 object-cover" />
        <img src="/images/far2.webp" className="w-1/2 object-cover" />
      </div>

      {/* MIDDLE */}
      <div
        ref={cloud2}
        className="cloud-layer absolute bottom-0 flex w-[200%] h-[42%] opacity-70"
      >
        <img src="/images/middle1.webp" className="w-1/2 object-cover" />
        <img src="/images/middle2.webp" className="w-1/2 object-cover" />
      </div>

      {/* FRONT */}
      <div
        ref={cloud3}
        className="cloud-layer absolute bottom-0 flex w-[200%] h-[55%]"
      >
        <img src="/images/front.webp" className="w-1/2 object-cover" />
        
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="text-8xl font-bold text-white">
          Welcome
        </h1>
      </div>
    </section>
  );
}
