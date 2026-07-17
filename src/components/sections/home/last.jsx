import React from "react";
import { Plane } from "lucide-react";         

const Last = () => {
  return (
    <section className="relative h-screen ">
      {/* Background */}
      <img
        src="/images/sky-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bottom-0 bg-gradient-to-b from-white to-transparent" />

      <img
        src="/images/front.webp"
        alt=""
        className="absolute inset-0 top-[-5px] h-full w-full rotate-180 object-cover"
      />

      <div className=" flex h-full items-center justify-center relative z-10">
        {/* Center */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="lg:pb-4 md:pb-2 mt-3 text-leading-0.25 text-tracking-tight font-heading text-[18px]  text-indigo-950 sm:text-[42px] md:text-[42px] lg:text-[50px] ">
            Make every journey as <br /> <span className="font-sub"> exclusive</span> as the destination
          </h2>
          <button
            className="
group

mt-6
sm:mt-8
lg:mt-10

inline-flex

items-center

gap-3

px-2
sm:px-3

py-3
sm:py-4

cursor-pointer
transition-colors
duration-300
"
          >
            {" "}
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full bg-[#0B2D63]">
              {" "}
              <Plane
                size={20}
                className="absolute transition-all duration-300 group-hover:translate-x-7 group-hover:-translate-y-7 group-hover:rotate-12"
              />
              <Plane
                size={20}
                className="absolute -translate-x-7 translate-y-7 -rotate-12 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"
              />
            </div>
            <span className="text-sm sm:text-base text-nachtblauw-dark pr-2 sm:pr-3">
              {" "}
              Book a Flight
            </span>
          </button>
        </div>
      </div>
      {/* Bottom Clouds */}
      <img
        src="/images/front.webp"
        alt=""
        className="pointer-events-none absolute bottom-[-1px] left-0 z-10 w-full object-cover sm:block"
      />
    </section>
  );
};

export default Last;
