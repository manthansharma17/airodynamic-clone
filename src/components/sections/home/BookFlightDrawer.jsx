import { useState } from "react";
import {
  X,
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

function FlightField({ label, value, placeholder, Icon }) {
  return (
    <button className="flex w-full items-center justify-between border-b border-slate-200 py-5 text-left transition hover:bg-slate-50">
      <div>
        <p className="mb-1 text-sm font-medium text-[#0B2D63]">{label}</p>

        <p
          className={`text-lg ${
            value ? "font-semibold text-[#0B2D63]" : "text-slate-400"
          }`}
        >
          {value || placeholder}
        </p>
      </div>

      <Icon size={20} className="text-slate-300 flex-shrink-0" />
    </button>
  );
}

export default function BookFlightDrawer({ isOpen, onClose }) {
  const [tripType, setTripType] = useState("return");

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm lg:hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full rounded-t-[30px] bg-white p-6 shadow-[0_-20px_60px_rgba(0,0,0,.25)]"
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#0B2D63]">Book Flight</h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Return / One-way */}

        <div className="mx-auto mb-8 flex w-[260px] rounded-full bg-[#F5F7FB] p-1">
          <button
            onClick={() => setTripType("return")}
            className={`flex-1 rounded-full py-3 text-sm font-semibold transition-all duration-300 ${
              tripType === "return"
                ? "bg-[#0B2D63] text-white shadow"
                : "text-slate-400"
            }`}
          >
            Return
          </button>

          <button
            onClick={() => setTripType("oneway")}
            className={`flex-1 rounded-full py-3 text-sm font-semibold transition-all duration-300 ${
              tripType === "oneway"
                ? "bg-[#0B2D63] text-white shadow"
                : "text-slate-400"
            }`}
          >
            One-way
          </button>
        </div>

        {/* Flight Fields */}

        <FlightField
          label="From"
          value="Amsterdam, Amsterdam Airport Schiphol"
          Icon={PlaneTakeoff}
        />

        <FlightField label="To" placeholder="Destination" Icon={PlaneLanding} />

        <FlightField
          label="When"
          placeholder="Departure - Return"
          Icon={CalendarDays}
        />

        <FlightField
          label="Persons"
          placeholder="Number of persons"
          Icon={Users}
        />

        {/* Search */}

        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B2D63] py-4 text-lg font-semibold text-white transition hover:bg-[#08244e]">
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  );
}
