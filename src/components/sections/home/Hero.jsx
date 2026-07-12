import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSearch from "./HeroSearch";
import heroScroll from "../../../animations/heroScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      heroScroll(hero.current);

      gsap.to(".cloud-track-0", {
        xPercent: -50,
        duration: 2000,
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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={hero} className="relative h-screen overflow-hidden">
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
          <div className=" hero-title absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className=" text-white text-[85px] leading-none font-heading tracking-[-3px]">
              Smooth journeys
            </h1>

            <em className="mt-2 text-[#153D78] text-[85px] leading-none font-sub italic ">
              Private skies
            </em>
          </div>
        </div>

        <HeroSearch />
        {/* Cloud Transition */}
        <img
          src="/images/front.webp"
          alt=""
          className="
    absolute
    bottom-[-250px]
    left-0
    w-full
    z-40
    pointer-events-none
    select-none
  "
        />
      </section>
    </>
  );
}
