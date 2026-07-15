import { ArrowRight } from "lucide-react";
import services from "./servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-[1600px] px-8">
        {/* Heading */}

        <div className="mb-12 mt-10 pb-20 flex items-center justify-between">
          <h2 className="text-[56px] font-heading leading-none tracking-[-3px] text-nachtblauw">
            Our services
          </h2>

          <button className="group flex items-center gap-4 rounded-full border border-gray-300 px-5 py-4 text-lg font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white">
            <span>View all</span>

            <div className="relative h-6 w-6 overflow-hidden">
              {/* Current Arrow */}
              <ArrowRight
                size={22}
                className="absolute transition-all duration-300 group-hover:translate-x-6"
              />

              {/* Incoming Arrow */}
              <ArrowRight
                size={22}
                className="absolute -translate-x-6 transition-all duration-300 group-hover:translate-x-0"
              />
            </div>
          </button>
        </div>

        {/* Cards */}

        <div className="mb-12 grid grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
