import React from "react";
import { ArrowRight } from "lucide-react";
import Globe3DDemoSecond from "./3d-globe-demo-2";

const PlaneButton = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/images/sky-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />

      <img
        src="/images/front.webp"
        alt=""
        className="absolute inset-0 top-[-5px] h-full w-full rotate-180 object-cover"
      />

      <div className="relative z-10">
        {/* Top */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 px-6 pt-12 pb-12 sm:px-8 md:flex-row md:px-12 lg:px-[8%] xl:px-[15%] xl:pb-[10%]">
          <h2 className="font-heading text-center text-[36px] leading-none tracking-[-1px] text-[#0B2D63] sm:text-[44px] md:text-[48px] lg:text-[56px] lg:tracking-[-3px] md:text-left">
            Our aircrafts
          </h2>

          <button className="group flex items-center gap-3 rounded-full border border-gray-300 px-5 py-3 text-base font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white sm:px-6 sm:py-4 sm:text-lg">
            <span>View all</span>

            <div className="relative h-6 w-6 overflow-hidden">
              <ArrowRight
                size={22}
                className="absolute transition-all duration-300 group-hover:translate-x-6"
              />

              <ArrowRight
                size={22}
                className="absolute -translate-x-6 transition-all duration-300 group-hover:translate-x-0"
              />
            </div>
          </button>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center px-6 text-center">
          <h2 className="pb-4 font-heading text-[34px] text-indigo-950 sm:text-[42px] md:text-5xl lg:text-6xl">
            From A to Anywhere
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-sub text-nachtblauw sm:text-base md:text-lg">
            From Europe to Asia, from North to South America.
            <br />
            Always in motion, anywhere in the world.
          </p>
        </div>

        {/* Globe */}
       {/* Globe */}
<div
  className="
    relative
    mt-10
    h-[380px]
    w-full
    sm:mt-12
    sm:h-[450px]
    md:h-[520px]
    lg:mt-16
    lg:h-[600px]
    xl:bottom-[-50px]
    xl:h-[650px]
  "
>
  <Globe3DDemoSecond />
</div>
      </div>

      {/* Bottom Clouds */}
      <img
        src="/images/front.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-20 w-full object-cover sm:block"
      />
    </div>
  );
};

export default PlaneButton;
