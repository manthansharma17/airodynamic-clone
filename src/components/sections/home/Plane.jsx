import { useEffect, useRef } from "react";
import heroAnimation from "./PlaneAnimation";
import { ArrowRight } from "lucide-react";
import Globe3DDemoSecond from "./3d-globe-demo-2";
const Plane = () => {
  const planeRef = useRef(null);

  useEffect(() => {
    const ctx = heroAnimation(planeRef);

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={planeRef}
        className="hero relative h-screen overflow-hidden text-[#e3e3db] [perspective:1000px]"
      >
        {/* SKY */}
        <div className="sky-container overflow-hidden absolute left-0 top-0 h-[140svh] w-full will-change-transform">
          <img
            src="/images/sky3.png"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="sky-text absolute pointer-events-none left-full top-[40%] z-10 w-max whitespace-nowrap">
            <h1 className="text-[15vw] font-heading font-medium uppercase leading-none text-[rgba(255,255,255,0.93)]">
              The Sky is Yours
            </h1>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <img
            src="/images/front.webp"
            alt=""
            className="absolute bottom-[-5%] w-screen object-cover opacity-100 "
          ></img>
        </div>

        {/* <div className=" absolute left-1/2 top-[62%] w-full max-w-7xl -translate-x-1/2 px-8">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-[56px] leading-none tracking-[-3px] text-[#0B2D63]">
                Our aircrafts
              </h2>

              <button className="group flex items-center gap-4 rounded-full border border-gray-300 px-5 py-4 text-lg font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white">
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
          </div>
          <div className="absolute top-[75%] left-0 w-full h-[30%]">
            <div className="relative py-7 flex flex-col items-center justify-evenly">
              <h2 className="mb-5 pb-1 text-5xl font-heading text-white">
                From A to Anywhere
              </h2>
              <p className="max-w-lg pt-4 text-center text-sub text-whit">
                From Europe to Asia, from North to South America. We connect the{" "}
                <br />{" "}
                <span>
                  world from the air. Always in motion, anywhere in the world.
                </span>{" "}
              </p>
            </div>
            <Globe3DDemoSecond />
          </div>
          <img
            src="/images/front.webp"
            alt=""
            className="absolute bottom-[-5%] w-screen object-cover opacity-65 "
          />
        </div> */}

        {/* HERO COPY */}
        {/* Uncomment later if needed */}
        {/*
      <div className="hero-copy absolute left-0 top-0 flex h-screen w-full items-center justify-center will-change-transform">
        <h1 className="w-[85%] text-[clamp(5rem,6vw,7rem)] font-medium leading-[0.8]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>
      */}

        {/* WINDOW */}
        <div className="window-container absolute left-0 top-0 h-screen w-full">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" /> */}
          <img
            src="/images/window.webp"
            alt=""
            className="h-full pointer-events-none w-full object-cover"
          />
        </div>

        {/* HEADER */}
        <div
          className="
          window-header
          absolute
          left-0
          top-0
          flex
          h-screen
          w-full
          p-8
          [transform-style:preserve-3d]
          will-change-transform
        "
        >
          <div className="flex flex-1 flex-col justify-between">
            <p className="w-1/2 font-heading text-amber-100 text-[1.35rem] leading-none">
              Aerodynamics
            </p>

            <h1 className="text-[clamp(3rem,4vw,4rem)]  text-white/40 font-sub font-medium leading-[0.8]">
              Where Distance
              <br />
              becomes Presence
            </h1>
          </div>

          <div className="flex flex-1 flex-col items-end justify-between text-right">
            <p className="w-1/2 font-heading  text-amber-100 text-[1.35rem] leading-none">
              Since 1986
            </p>

            <h1 className="text-[clamp(3rem,4vw,4rem)]  text-white/40 font-sub font-medium leading-[0.8]">
              Rest deeply in
              <br />
              your private sky
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plane;
