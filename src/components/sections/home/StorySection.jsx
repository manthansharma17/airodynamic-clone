// src/components/StorySection.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import galleryData from "./galleryData";
import { Plane } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");
    const images = gsap.utils.toArray(".gallery-image");
    const slides = gsap.utils.toArray(".slide");

    // Place every panel except first below viewport

    gsap.set(".reveal", {
      yPercent: 100,
      scale: 0.92,
      borderRadius: 40,
      transformOrigin: "bottom center",
    });

    gsap.set(images, {
      opacity: 0,
    });

    gsap.set(slides, {
      opacity: 0,
      y: 100,
    });

    gsap.set(images[0], {
      opacity: 1,
    });

    gsap.set(slides[0], {
      opacity: 1,
      y: 0,
    });

    // Create the timeline

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    });

    tl.from(".content-subtitle", {
      y: 120,
      opacity: 0,
      duration: 0.7,
    });

    // Animate first panel content

    tl.from(".left-content", {
      y: 120,
      opacity: 0,
      duration: 0.7,
    });

    tl.from(
      ".right-content",
      {
        y: 120,
        opacity: 0,
        duration: 0.7,
      },
      "<",
    );

    tl.to(
      {},
      {
        duration: 1,
      },
    );

    tl.to(".reveal", {
      yPercent: 0,
      scale: 1,
      borderRadius: 0,
      duration: 2,
      ease: "power1.out",
    });

    for (let i = 0; i < slides.length - 1; i++) {
      tl.to(slides[i], {
        y: -150,
        opacity: 0,
        duration: 1.5,
      });

      tl.to(
        images[i],
        {
          opacity: 0,
          duration: 1.5,
        },
        "<",
      );

      tl.to(
        images[i + 1],
        {
          opacity: 1,
          duration: 1.5,
        },
        "<",
      );

      tl.fromTo(
        slides[i + 1],
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
        },
        "<0.2",
      );
    }

    // panels.slice(1).forEach((panel) => {
    //   tl.to(panel, {
    //     yPercent: 0,
    //     scale: 1,
    //     borderRadius: "0px",
    //     duration: 1,
    //     ease: "power2.out",
    //   });
    // });
  });

  return (
    <div className="wrapper relative h-screen overflow-hidden">
      {/* =========================
            ABOUT PANEL
      ========================= */}

      <div className="panel about absolute inset-0 z-[1] flex h-screen w-full items-center justify-center overflow-hidden bg-white">
        <div className="mx-auto w-full max-w-7xl px-25 py-1">
          <span className="content-subtitle inline-block text-[15px] p-1 font-semibold text-[#0B73FF]">
            About Aerodynamics
          </span>

          <div className="about-grid mt-[35px] grid grid-cols-8 gap-x-8 gap-y-20">
            {/* Left */}

            <div className="left-content col-span-5">
              <h2 className="content-heading font-heading text-[60px] font-normal leading-[0.95] tracking-[-2px] text-[#0B2D63]">
                Aerodynamics offers
                <br />
                <span className=" font-sub italic">luxury</span> and service
                <br />
                at the highest level.
              </h2>
            </div>

            {/* Right */}

            <div className="right-content col-span-5 col-start-5 self-end">
              <p className="content-text max-w-[430px] text-[20px] leading-[1.4] text-[#64789d]">
                Private jets deserve service of the highest calibre. That is the
                conviction of Aerodynamics, and that dedication is felt in every
                interaction. Clients notice the difference, and that is
                precisely why they choose Aerodynamics time and again.
              </p>
              
              <button className="group mt-10 inline-flex cursor-pointer items-center gap-3 px-3 py-4 transition-colors duration-300">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#0B2D63]">
                  <Plane
                    size={20}
                    className="absolute transition-all duration-300 group-hover:translate-x-7 group-hover:-translate-y-7 group-hover:rotate-12"
                  />

                  <Plane
                    size={20}
                    className="absolute -translate-x-7 translate-y-7 -rotate-12 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"
                  />
                </div>

                <span className=" text-nachtblauw-dark pr-3">Book a Flight</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
            REVEAL PANEL
      ========================= */}

      <div className="panel reveal absolute inset-0 z-[2] h-screen w-full overflow-hidden bg-white">
        <div className="reveal-section relative h-screen overflow-hidden bg-white">
          <div className="gallery relative h-full">
            {/* =========================
                  BACKGROUND IMAGES
            ========================= */}

            <div className="gallery-images absolute inset-0">
              {galleryData.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="gallery-image absolute inset-0 h-full w-full object-cover opacity-0"
                />
              ))}

              <div className="overlay absolute inset-0 bg-black/40"></div>
            </div>

            {/* =========================
                  SLIDES
            ========================= */}

            <div className="gallery-slides relative z-10 h-full">
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="slide absolute inset-0 flex items-center pt-[25%] opacity-0"
                >
                  <div className="container mx-[10px] w-full max-w-7xl px-10">
                    <span className="slide-number text-[18px] font-medium text-blue-300">
                      {item.number}
                    </span>

                    <h2 className="slide-title mt-4 max-w-[800px] text-[34px] font-bold font-heading leading-none text-white">
                      {item.title}
                    </h2>

                    <p className="slide-description mt-8 max-w-[520px] font-sub text-[15px] leading-[1.8] text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
