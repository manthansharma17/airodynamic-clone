import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import galleryData from "./galleryData";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);
  const revealRef = useRef(null);
  const imageRefs = useRef([]);
  const slideRefs = useRef([]);

 useGSAP(
   () => {
     // Initial state
     gsap.set(imageRefs.current, { opacity: 0 });
     gsap.set(slideRefs.current, { opacity: 0, y: 80 });

     gsap.set(imageRefs.current[0], { opacity: 1 });
     gsap.set(slideRefs.current[0], { opacity: 1, y: 0 });

gsap.fromTo(
  revealRef.current,
  {
    yPercent: 15,
    scale: 0.97,
    borderRadius: 32,
  },
  {
    yPercent: 0,
    scale: 1,
    borderRadius: 0,
    scrollTrigger: {
      trigger: revealRef.current,
      start: "top bottom",
      end: "top top", // finish before pin starts
      scrub: true,
    },
  },
);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top top",
        end: `+=${galleryData.length * 100}%`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

     galleryData.forEach((_, index) => {
       // Don't animate after the last slide
       if (index === galleryData.length - 1) return;

       // Current slide leaves
       tl.to(slideRefs.current[index], {
         y: -120,
         opacity: 0,
         duration: 1,
       });

       // Crossfade images
       tl.to(
         imageRefs.current[index],
         {
           opacity: 0,
           duration: 1,
         },
         "<",
       );

       tl.to(
         imageRefs.current[index + 1],
         {
           opacity: 1,
           duration: 1,
         },
         "<",
       );

       // Next slide enters
       tl.fromTo(
         slideRefs.current[index + 1],
         {
           y: 120,
           opacity: 0,
         },
         {
           y: 0,
           opacity: 1,
           duration: 1,
         },
         "<0.3",
       );
     });
   },
   { scope: galleryRef },
 );

  return (
    <section className="relative h-[250vh]">
      <div
        ref={revealRef}
        className="sticky top-0 h-screen overflow-hidden bg-white "
      >
        <div ref={galleryRef} className="relative h-full">
          {/* Background */}
          <div className=" absolute inset-0">
            {galleryData.map((item, index) => (
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                key={item.id}
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity: 0 }}
              />
            ))}

            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Slides */}
          <div className="relative z-10 h-full">
            {galleryData.map((item, index) => (
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                key={item.id}
                className="absolute inset-0 flex items-center"
                style={{ opacity: 0 }}
              >
                <div className="mx-auto w-full max-w-7xl px-6">
                  <span className="text-blue-300">0{item.id}</span>

                  <h2 className="mt-4 max-w-3xl text-5xl font-bold text-white lg:text-7xl">
                    {item.title}
                  </h2>

                  <p className="mt-8 max-w-xl text-lg text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
