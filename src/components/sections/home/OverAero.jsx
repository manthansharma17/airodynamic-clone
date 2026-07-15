import { ArrowUpRight } from "lucide-react";

export default function OverAeroSection() {
  return (
    <section className="relative bg-white pt-40 pb-24 lg:pt-52 lg:pb-36">
      {/* Cloud Overlay */}
      <img
        src="/images/front.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[-5%] inset-x-0 left-0 w-full select-none pointer-events-none z-10 object-cover "
      />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="/images/overaero.webp"
              alt="Private Jet"
              className="h-[650px] w-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:pl-14">
          <p className="mb-6 text-sm font-semibold text-[#1E73FF]">
            About Aerodynamics
          </p>

          <h2 className="max-w-xl pb-6 text-5xl font-heading leading-[1.08] tracking-tight text-[#0B2D63]">
            Where exclusivity
            <br />
            takes flight
            <br />
            since 1986
          </h2>

          <p className="mt-10 max-w-lg pb-5 font-sub text-lg leading-9 text-[#5F6C84]">
            Since 1986, Aerodynamics has combined exclusivity and perfection
            into every flight. Every journey is tailor-made for those who accept
            nothing but the very best.
          </p>

          <button className="group mt-14 flex items-center gap-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B2D63] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-white" strokeWidth={2} />
            </span>

            <span className="text-lg font-medium text-[#0B2D63]">Our team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
