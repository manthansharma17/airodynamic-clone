import { ArrowUpRight } from "lucide-react";

export default function OverAeroSection() {
  return (
    <section className="relative bg-white pb-24 lg:pt-45 lg:pb-36">
      {/* Cloud Overlay */}
      <img
        src="/images/front.webp"
        alt=""
        aria-hidden="true"
        className="absolute  h-50 lg:h-100 z-10  left-0 w-full opacity-100  object-cover sm:hidden md:hidden "
      />

      <div className="absolute lg:h-100 lg:top-[-52vh] top-[-28%] inset-0 bg-gradient-to-t z-10 from-white via-white/50 to-transparent" />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="/images/overaero.webp"
              alt="Private Jet"
              className=" h-[40px] lg:h-[650px] w-full object-cover"
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
