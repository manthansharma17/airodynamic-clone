import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import services from "./servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const scrollRef = useRef(null);
  

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleWheel = (e) => {
      // Only horizontal scroll on desktop
      if (window.innerWidth < 1024) return;

      if (
        Math.abs(e.deltaY) > Math.abs(e.deltaX) &&
        container.scrollWidth > container.clientWidth
      ) {
        e.preventDefault();

        container.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-32 lg:py-32 md:py-24">
      <div className="mx-auto py-18 max-w-[1800px] pl-3 sm:pl-8 md:pl-5 lg:pl-5 xl:px-6 2xl:px-6">
        {/* Header */}

        <div className="mb-10 flex py-8 flex-row item-center justify-between gap-6 px-5 lg:pb-16 sm:px-8 lg:mb-16  lg:items-center lg:justify-between lg:px-10">
          <h2 className="text-4xl font-heading leading-none tracking-tight text-nachtblauw sm:text-5xl lg:text-[56px]">
            Our services
          </h2>

          <button className="group flex w-fit items-center gap-4 rounded-full border border-gray-300 px-4 py-2 text-base font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white lg:text-lg">
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

        {/* Cards */}

        <div
          ref={scrollRef}
          className="
    scrollbar-hide
    flex
    items-center
    snap-x
    snap-mandatory
    sm:gap-6
    lg:gap-8
    overflow-x-auto
    overflow-y-hidden
    scroll-smooth
    pb-4
    lg:h-[600px]
    h-[500px]
  "
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="
                snap-start
                shrink-0

                w-[79vw]
                md:w-[320px]

                sm:w-[340px]

                lg:w-[490px]

                xl:w-[500px]

                2xl:w-[550px]
              "
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
