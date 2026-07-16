import React from "react";
import { ArrowRight } from "lucide-react";
import Globe3DDemoSecond from "./3d-globe-demo-2";

const PlaneButton = () => {
  return (
    <section className="relative h-full overflow-hidden">
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

      <div className="relative z-10">
        {/* Top */}
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 px-6 pt-12 pb-12 sm:px-8 md:flex-row sm: flex-row md:px-12 lg:px-[8%] xl:px-[15%] xl:pb-[10%]">
          <h2 className="font-heading text-center text-[16px]  leading-none tracking-[-1px] text-[#0B2D63] sm:text-[30px] md:text-[30px] lg:text-[56px] lg:tracking-[-3px] md:text-left">
            Our aircrafts
          </h2>

          <button className="group flex items-center gap-2 lg:gap-3 md:gap-2 rounded-full border border-gray-300 px-2 py-1 lg:text-sm font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white sm:px-6 sm:py-4 lg:px-5 lg:py-3 sm:text-lg">
            <span className=" text-[10px] lg:text-sm">View all</span>

            <div className="relative h-6 w-4 lg:h-6 lg:w-6 overflow-hidden">
              <ArrowRight
                size={22}
                className="absolute  transition-all duration-300 group-hover:translate-x-6"
              />

              <ArrowRight
                size={22}
                className="absolute -translate-x-6 transition-all duration-300 group-hover:translate-x-0"
              />
            </div>
          </button>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center pt-[20%] lg:pt-[22%] md:pt-2.5 text-center">
          <h2 className="lg:pb-4 md:pb-2 font-heading text-[25px] text-indigo-950 sm:text-[42px] md:text-[42px] lg:text-[50px] ">
            From A to Anywhere
          </h2>
          <p className="max-w-2xl text-[8px] leading-relaxed text-sub text-nachtblauw sm:text-base md:text-[15px] lg:text-[18px]">
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

    w-full
    h-[200px]
    mt-8
    sm:mt-12
    sm:h-[450px]
    md:h-[520px]
    lg-h-[650px]
    lg:bottom-[-2%]
    xl:bottom-[-5%]
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
        className="pointer-events-none absolute bottom-[-1px] left-0 z-10 w-full object-cover sm:block"
      />
    </section>
  );
};

export default PlaneButton;
