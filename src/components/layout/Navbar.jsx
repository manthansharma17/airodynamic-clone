import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  // Navigation items array to keep the HTML clean and scalable
  const navItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Model", path: "/model" },
    { name: "Insight", path: "/insight" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-70 px-6 pt-3">
        <div className="mx-auto h-[70px] w-full">
          {/* ================= Desktop ================= */}
          <div className="hidden h-full items-center px-[30px] md:flex">
            {/* Left Navigation */}
            <div className="flex-1">
              <nav>
                <ul className="flex items-center gap-8 font-Unica text-[14px]">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `group relative block h-7 overflow-hidden
                    before:absolute before:left-0 before:bottom-0 before:h-[1.45px] before:w-full
                    before:bg-blue-950 before:origin-left before:transition-transform before:duration-600
                    after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full
                    after:bg-gray-400 after:origin-left after:transition-transform after:duration-600
                    ${
                      isActive
                        ? "before:scale-x-100 after:scale-x-0"
                        : "before:scale-x-0 after:scale-x-0 hover:after:scale-x-100"
                    }`
                        }
                      >
                        {({ isActive }) => (
                          <div
                            className={`transition-transform duration-700 ${
                              isActive
                                ? "hover:-translate-y-6"
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

            {/* Logo */}
            <div className="flex flex-1 justify-center">
              <NavLink to="/">
                <img
                  src="/images/logo/logo_white.svg"
                  alt="Logo"
                  className="h-[33px] w-[43px] "
                />
              </NavLink>
            </div>

            {/* Right */}
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="group h-11 w-11 overflow-hidden rounded-full border border-white/10 transition-all duration-500 hover:bg-white">
                <div className="transition-transform duration-500 group-hover:-translate-y-11">
                  <div className="flex h-11 items-center justify-center">
                    <img
                      src="/icons/language_white.svg"
                      className="h-4 w-4"
                      alt=""
                    />
                  </div>

                  <div className="flex h-11 items-center justify-center">
                    <img src="/icons/language.svg" className="h-4 w-4" alt="" />
                  </div>
                </div>
              </div>

              <button className="group h-11 overflow-hidden rounded-full border border-white/10 px-8 text-white transition hover:bg-white hover:text-blue-950">
                <div className="transition-transform duration-500 group-hover:-translate-y-11">
                  <div className="flex h-11 items-center">Flight estimate</div>

                  <div className="flex h-11 items-center">Book Now →</div>
                </div>
              </button>
            </div>
          </div>

          {/* ================= Mobile ================= */}
          <div className="flex h-full items-center justify-between md:hidden">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
              <img src="/icons/language.svg" className="h-4 w-4" alt="" />
            </button>

            <NavLink to="/">
              <img
                src="/images/logo/logo.svg"
                className="h-[33px] w-[43px]  brightness-0 invert"
                alt=""
              />
            </NavLink>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              {menuOpen ? (
                <X size={22} color="#0B2E67" />
              ) : (
                <Menu size={22} color="#0B2E67" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#0B2E67] text-white transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-light"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
