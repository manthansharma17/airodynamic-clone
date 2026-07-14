import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(contentRef.current, {
        yPercent: -45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-white"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:max-w-7xl lg:px-10">
        <div
          ref={contentRef}
          className="max-w-3xl space-y-8 will-change-transform"
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            About Us
          </span>

          <h2 className="text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Luxury travel designed around your journey.
          </h2>

          <p className="text-lg leading-8 text-gray-600 lg:text-xl">
            We create seamless private aviation experiences tailored to your
            schedule. Every journey is crafted with comfort, privacy, and
            efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
