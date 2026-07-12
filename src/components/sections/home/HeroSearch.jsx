import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

export default function HeroSearch() {
  return (
    <>
    <div className=" hero-search absolute bottom-15 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-6">

      {/* Wrapper */}
      <div className="relative pt-10">

        {/* Floating Tabs */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-50 ">
          <div className="relative inline-flex rounded-full bg-white p-1 shadow-xl">

            {/* Active Background */}
            <div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#0B2D63]" />

            <button className="relative z-10 h-10 w-32 rounded-full text-sm font-medium text-white">
              Return
            </button>

            <button className="relative z-10 h-10 w-32 rounded-full text-sm font-medium text-slate-500 transition hover:text-slate-800">
              One-way
            </button>

          </div>
        </div>

      {/* Search Card */}
      <div className="flex h-20 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,.18)]">
        {/* From */}
        <button className="group flex flex-1 items-center justify-between border-r border-dashed border-slate-300 px-7 text-left transition hover:bg-slate-50">
          <div>
            <p className="mb-1 text-xs text-slate-400">From</p>
            <p className="font-medium text-slate-900">Amsterdam Airport</p>
          </div>

          <PlaneTakeoff
            size={22}
            className="text-slate-400 group-hover:text-slate-600"
          />
        </button>

        {/* To */}
        <button className="group flex flex-1 items-center justify-between border-r border-dashed border-slate-300 px-7 text-left transition hover:bg-slate-50">
          <div>
            <p className="mb-1 text-xs text-slate-400">To</p>
            <p className="text-slate-400">Destination</p>
          </div>

          <PlaneLanding
            size={22}
            className="text-slate-400 group-hover:text-slate-600"
          />
        </button>

        {/* Date */}
        <button className="group flex flex-1 items-center justify-between border-r border-dashed border-slate-300 px-7 text-left transition hover:bg-slate-50">
          <div>
            <p className="mb-1 text-xs text-slate-400">When</p>
            <p className="text-slate-400">Departure - Return</p>
          </div>

          <CalendarDays
            size={20}
            className="text-slate-400 group-hover:text-slate-600"
          />
        </button>

        {/* Persons */}
        <button className="group flex flex-1 items-center justify-between px-7 text-left transition hover:bg-slate-50">
          <div>
            <p className="mb-1 text-xs text-slate-400">Persons</p>
            <p className="text-slate-400">Number of persons</p>
          </div>

          <Users
            size={20}
            className="text-slate-400 group-hover:text-slate-600"
          />
        </button>

        {/* Search */}
        <button className="flex w-24 items-center justify-center bg-[#0B2D63] text-white transition hover:bg-[#08244e]">
          <Search size={22} />
        </button>
      </div>
    </div>
    </div>
    </>
  );
}
