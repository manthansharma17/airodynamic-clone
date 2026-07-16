import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSearch from "./HeroSearch";
import BookFlightDrawer from "./BookFlightDrawer";
import heroScroll from "../../../animations/heroScroll";
import Checkbox from "../../ui/hamburger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = useRef();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      heroScroll(hero.current);

      gsap.to(".cloud-track-0", {
        xPercent: -50,
        duration: 400,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".cloud-track-1", {
        xPercent: -50,
        duration: 200,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".cloud-track-2", {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // gsap.to(".cloud-track-3", {
      //     xPercent: -50,
      //     duration: 40,
      //     repeat: -1,
      //     ease: "none",
      // });
    }, hero);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={hero} className="relative min-h-screen overflow-hidden">
        {/* SKY */}
        <img
          src="/images/sky.png"
          className=" sky absolute inset-0 h-full w-full object-cover opacity-70 z-0"
        />

        {/* CLOUDS */}
        <div className="cloud-track-0 absolute top-[0%] flex w-max opacity-15 z-10">
          <img src="/images/far1.webp" className="shrink-0 max-w-none" />
          <img src="/images/far1.webp" className="shrink-0 max-w-none" />
        </div>

        <div className="cloud-track-1 absolute top-[40%] flex w-max opacity-100 z-20">
          <img src="/images/far2.webp" className="shrink-0 max-w-none" />
          <img src="/images/far2.webp" className="shrink-0 max-w-none" />
        </div>

        <div className="cloud-track-2 absolute top-[65%] flex w-max opacity-100 z-30">
          <img src="/images/middle1.webp" className="shrink-0 max-w-none" />
          <img src="/images/middle1.webp" className="shrink-0 max-w-none" />
        </div>

        {/* <div className="cloud-track-3 absolute -bottom-0 flex w-max z-30">
        <img src="/images/far1.webp" className="shrink-0 max-w-none" />
        <img src="/images/far1.webp" className="shrink-0 max-w-none" />
      </div> */}

        {/* CONTENT */}
        <div className="absolute inset-0 z-40 pointer-events-none">
          {/* Center Hero Text */}
          <div className=" hero-title absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 px-4 text-center">
            <h1 className="text-white text-[42px] leading-none font-heading tracking-[-1px] sm:text-[56px] md:text-[68px] md:tracking-[-2px] lg:text-[85px] lg:tracking-[-3px]">
              Smooth journeys
            </h1>

            <em className="mt-2 block text-[#153D78] text-[42px] leading-none font-sub italic sm:text-[56px] md:text-[68px] lg:text-[85px]">
              Private skies
            </em>
          </div>
        </div>

        {/* Desktop search bar (1024px+), unchanged */}
        <HeroSearch />

        {/* Tablet + mobile: single Book Flight trigger opening the bottom drawer */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="hero-book-trigger absolute bottom-8 left-1/2 z-50 -translate-x-1/2
             flex h-14 w-[60%] max-w-[360px] items-center justify-center
             rounded-full bg-white text-[15px] font-semibold text-[#0B2D63]
             shadow-[0_20px_60px_rgba(0,0,0,.18)]
             lg:hidden"
        >
          Book Flight
        </button>

        <BookFlightDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        {/* Cloud Transition — offset tuned per breakpoint so the blend
            looks consistent whether the viewport is narrow or wide */}
        <img
          src="/images/front.webp"
          alt=""
          className="
    absolute
    bottom-[-90px]
    sm:bottom-[-140px]
    md:bottom-[-190px]
    lg:bottom-[-250px]
    left-0
    w-full
    z-40
    pointer-events-none
    select-none
  "
        />

        {/* Softens the seam between the hero and the section below so there's
            no hard boundary line, regardless of viewport width */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 bg-gradient-to-b from-transparent to-white sm:h-20 md:h-24 lg:h-28"
        />
      </div>

      
    </>
  );
}
