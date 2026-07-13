import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import galleryData from "./galleryData";

gsap.registerPlugin(ScrollTrigger);

export default function RevealSection() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Starting state
    gsap.set(panelRef.current, {
      scale: 0.8,
      y: 200,
      borderRadius: 30,
    });

    // Reveal animation
    gsap.to(panelRef.current, {
      scale: 1,
      y: 0,
      borderRadius: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    // Change image while scrolling
    const cards = document.querySelectorAll(".story-card");

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",

        onEnter: () => setActiveImage(index),
        onEnterBack: () => setActiveImage(index),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Main Panel */}
        <div ref={panelRef} className="h-full w-full bg-[#07111d]">
          <div className="grid h-full grid-cols-2">
            {/* LEFT SIDE */}
            <div>
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="story-card h-screen flex items-center px-20"
                >
                  <div>
                    <p className="text-blue-400 mb-3 uppercase">0{item.id}</p>

                    <h2 className="text-6xl font-bold text-white mb-6">
                      {item.title}
                    </h2>

                    <p className="text-xl leading-9 text-zinc-300 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="sticky top-0 flex items-center justify-center">
              <div className="relative w-[620px] h-[700px]">
                {galleryData.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-700 ${
                      activeImage === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 