import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Content = () => {
   const sectionRef = useRef(null);


useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top 65%",
        scrub: 0.6,
      },
    });

      tl.from(
  ".content-heading",
  {
    y: 80,
    opacity: 0,
  },
  0
)
.from(
  ".content-text",
  {
    y: 50,
    opacity: 0,
  },
  0.15
)
.from(
  ".content-button",
  {
    y: 30,
    opacity: 0,
  },
  0.3
);

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="
    content-bg
    relative
    z-50
    -mt-32
    lg:-mt-52
    bg-white
    pt-40
    pb-20
    lg:pl-40 "
      >
        {/* <div className="absolute h-16 left-0 w-full pointer-events-none md:-top-133 lg: -top-34">
          <img src="/images/front.webp" alt="" className="w-full" />
        </div> */}

        <div className=" max-w-7xl px-6 py-3 lg:px-10">
          {/* Small Heading */}
          <span className="text-[15px] font-medium text-[#0B73FF]">
            About Aerodynamics
          </span>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-2  lg:grid-cols-12 lg:gap-y-4">
            {/* Left */}
            <div className="lg:col-span-8">
              <h2
                className="content-heading 
                font-heading
                text-[#0B2D63]
                leading-[0.95]
                tracking-[-2px]

                text-[36px]
                sm:text-[50px]
                md:text-[55px]
                lg:text-[60px]
              "
              >
                Aerodynamics offers
                <br />
                <span className="font-sub italic">luxury</span> and service at
                <br />
                the highest level.
              </h2>
            </div>

            {/* Right */}
            <div className=" flex flex-col  jusify-between col-span-3 col-start-1 pt-10 lg:col-span-5 lg:col-start-6 lg:pt-10 lg: gap-3">
              <p
                className="content-text
                max-w-none
                text-[18px]
                leading-[1.5]
                tracking-[-0.5px]
                text-[#5E7092]
                lg:text-[15 px]
              "
              >
                Private jets deserve service of the highest calibre. That is the
                conviction of Aerodynamics, and that dedication is felt in every
                interaction. Clients notice the difference, and that is
                precisely why they choose Aerodynamics time and again.
              </p>

              {/* CTA */}
              <button className=" content-button group flex items-center pt-10 gap-2">
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0B2D63]
                  text-white
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:rotate-45
                "
                >
                  <ArrowUpRight size={16} />
                </div>

                <span
                  className="
                  text-lg
                  font-medium
                  text-[#0B2D63]
                "
                >
                  Book a flight
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
