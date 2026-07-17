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
        className="hero relative h-screen overflow-hidden text-[#e3e3db] [perspective:125px]"
      >
        {/* SKY */}
        <div className="sky-container overflow-hidden absolute left-0 top-0 h-screen lg:h-[130svh] sm:h-[150svh] w-full will-change-transform">
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

          {/* <div className="hero-copy absolute z-10 left-0 flex h-screen w-full items-center justify-center will-change-transform sm:top-[60%] md: lg:top-[70%] xl:">
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
                </div> */}


          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <img
            src="/images/front.webp"
            alt=""
            className="absolute bottom-[-5%] w-screen object-cover opacity-100 "
          ></img>
        </div>

       

        {/* HERO COPY */}
        {/* Uncomment later if needed */}
        
      
  
     

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
