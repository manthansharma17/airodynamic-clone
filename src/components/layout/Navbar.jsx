import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // Navigation items array to keep the HTML clean and scalable
  const navItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Model", path: "/model" },
    { name: "Insight", path: "/insight" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <div className="mx-auto h-[70px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex h-full items-center px-[30px]">
          {/* Left: Navigation Menu */}
          <div className="flex-1">
            <nav>
              <ul className="flex items-center gap-8 font-Unica text-[14px]">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `group relative block h-6 overflow-hidden
                      before:absolute
                      before:left-0
                      before:bottom-0
                      before:h-[1.5px]
                      before:w-full
                    before:bg-blue-950
                      before:origin-left
                      before:transition-transform
                      before:duration-600

                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-[1.5px]
                      after:w-full
                    after:bg-gray-400
                      after:origin-left
                      after:transition-transform
                      after:duration-600

    ${
      isActive
        ? "before:scale-x-100 after:scale-x-0"
        : "before:scale-x-0 after:scale-x-0 hover:after:scale-x-100"
    }`
                      }
                    >
                      {({ isActive }) => (
                        <div
                          className={`transition-transform duration-800 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? " hover:-translate-y-6"
                          : "group-hover:-translate-y-6"
                      }`}
                        >
                          <span className="flex h-6 items-center">
                            {item.name}
                          </span>

                          <span className="flex h-6 items-center">
                            {item.name}
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <NavLink to="/">
              <img
                src="/images/logo/logo.svg"
                alt="Logo"
                className="w-[43px] h-[33px] object-contain"
              />
            </NavLink>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-1 items-center justify-end gap-[10px]">
            <div className="group h-11 w-11 overflow-hidden rounded-full border border-slate-800/20">
              <div className="transition-transform duration-600 ease-in-out group-hover:-translate-y-11">
                <div className="flex h-11 items-center justify-center">
                  <img
                    src="/icons/language.svg"
                    alt="Language"
                    className="h-4 w-4 object-contain"
                  />
                </div>

                <div className="flex h-11 items-center justify-center">
                  <img
                    src="/icons/language.svg"
                    alt="Language"
                    className="h-4 w-4 object-contain"
                  />
                </div>
              </div>
            </div>

            <button className="group h-11 overflow-hidden rounded-full border border-slate-800/20 bg-white/5 px-8 text-slate-950 backdrop-blur-md transition-all duration-600 hover:bg-slate-700 hover:text-white">
              <div className="transition-transform duration-600 ease-in-out group-hover:-translate-y-11">
                <div className="flex h-11 items-center justify-center text-[14px] font-medium">
                  Flight estimate
                </div>

                <div className="flex h-11 items-center justify-center text-[14px] font-medium">
                  Book Now →
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
