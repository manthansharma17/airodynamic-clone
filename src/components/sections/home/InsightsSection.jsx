import { ArrowRight } from "lucide-react";
import InsightCard from "./InsightCard";
import insights from "./insightsData";

const InsightsSection = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-8">
        {/* Header */}
        <div className="mb-16 py-20 flex items-center justify-between">
          <h2 className="font-heading text-[56px] sm:text-[40px] leading-none tracking-[-3px] text-[#0B2D63] md:text-[40px]">
            Insights & events
          </h2>

          <button className="group flex items-center gap-4 rounded-full border border-gray-300 px-4 py-3 text-lg font-medium text-[#0B2D63] transition-all duration-300 hover:bg-[#0B2D63] hover:text-white">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((item) => (
            <InsightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
