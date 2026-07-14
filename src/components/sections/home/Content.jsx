import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  {
    id: 1,
    title: "Private Charter",
    description:
      "Travel in complete luxury with our tailored private charter experience, delivering comfort, speed and complete flexibility.",
    image: "/images/asset 3.jpg",
  },
  {
    id: 2,
    title: "Aircraft Management",
    description:
      "Comprehensive aircraft management ensuring every flight is handled with precision and the highest operational standards.",
    image: "/images/asset 4.jpg",
  },
  {
    id: 3,
    title: "VIP Services",
    description:
      "From departure to arrival, every detail is curated to provide a seamless premium experience for every passenger.",
    image: "/images/asset 5.jpg",
  },
];

const Content = () => {
  const storyRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryWrapperRef = useRef(null);
  const galleryRef = useRef(null);

  const [activeImage, setActiveImage] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // -----------------------------
      // ABOUT SECTION
      // -----------------------------

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      aboutTl.to(".content-heading", {
        y: -180,
        opacity: 0,
        ease: "none",
      });

      aboutTl.to(
        ".content-text",
        {
          y: -120,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      aboutTl.to(
        ".content-button",
        {
          y: -80,
          opacity: 0,
          ease: "none",
        },
        0,
      );

      // -----------------------------
      // GALLERY COMES FROM BOTTOM
      // -----------------------------

      gsap.fromTo(
        galleryRef.current,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: galleryWrapperRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        },
      );

      // -----------------------------
      // PIN GALLERY
      // -----------------------------

      ScrollTrigger.create({
        trigger: galleryWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: galleryRef.current,
        pinSpacing: false,
      });

      // -----------------------------
      // STORY ANIMATION
      // -----------------------------

      const cards = gsap.utils.toArray(".story-card");

      cards.forEach((card, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,

            onEnter: () => setActiveImage(index),

            onEnterBack: () => setActiveImage(index),
          },
        });

        tl.fromTo(
          card.children[0],
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
        );

        tl.to(card.children[0], {
          y: -120,
          opacity: 0,
          duration: 1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={storyRef} className="relative bg-white">
        {/* =======================================================
                        ABOUT PANEL
        ======================================================= */}

        <div
          ref={aboutRef}
          className="relative flex h-screen items-center bg-white"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <span className="content-subtitle text-[15px] font-medium text-[#0B73FF]">
              About Aerodynamics
            </span>

            <div className="mt-10 grid gap-y-10 lg:grid-cols-12">
              {/* LEFT */}

              <div className="lg:col-span-7">
                <h2 className="content-heading font-heading text-[40px] leading-[0.95] tracking-[-2px] text-[#0B2D63] md:text-[60px]">
                  Aerodynamics offers
                  <br />
                  <span className="font-sub italic">luxury</span> and service
                  <br />
                  at the highest level.
                </h2>
              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
                <p className="content-text leading-8 text-[#5E7092]">
                  Private jets deserve service of the highest calibre. That is
                  the conviction of Aerodynamics, and that dedication is felt in
                  every interaction. Clients notice the difference, and that is
                  precisely why they choose Aerodynamics time and again.
                </p>

                <button className="content-button group mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2D63] text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>

                  <span className="text-lg font-medium text-[#0B2D63]">
                    Book a Flight
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
                      GALLERY WRAPPER
        ======================================================= */}

        <div ref={galleryWrapperRef} className="relative h-[400vh]">
          {/* ===================================================
                        PINNED GALLERY
          =================================================== */}

          <div
            ref={galleryRef}
            className="relative h-screen overflow-hidden bg-black"
          >
            {/* ================= BACKGROUND IMAGES ================= */}

            <div className="absolute inset-0">
              {galleryData.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeImage === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-8">
                {galleryData.map((item) => (
                  <div
                    key={item.id}
                    className="story-card flex h-screen items-center"
                  >
                    <div className="max-w-3xl">
                      <p className="mb-5 text-sm uppercase tracking-[6px] text-blue-300">
                        0{item.id}
                      </p>

                      <h2 className="mb-8 text-6xl font-bold leading-tight text-white">
                        {item.title}
                      </h2>

                      <p className="max-w-2xl text-xl leading-10 text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
                      NEXT SECTION
      ======================================================= */}

      <section className="relative flex h-screen items-center justify-center bg-white">
        <h2 className="text-6xl font-bold text-[#0B2D63]">Next Section</h2>
      </section>
    </>
  );
};

export default Content;
