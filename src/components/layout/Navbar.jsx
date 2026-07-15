import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import AnimatedLink from "@/components/ui/AnimatedLink";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedSwapText from "@/components/ui/AnimatedSwapText";
import AnimatedSwapIcon from "@/components/ui/AnimatedSwapIcon";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Model", path: "/model" },
    { name: "Insight", path: "/insight" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-[70] px-6 pt-3">
        <div className="mx-auto h-[70px] w-full">
          {/* ========================= Desktop ========================= */}

          <div className="hidden h-full items-center px-[30px] md:flex">
            {/* Left Navigation */}

            <div className="flex-1">
              <nav>
                <ul className="flex items-center gap-8 font-Unica text-[14px]">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <AnimatedLink to={item.path}>{item.name}</AnimatedLink>
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
                  className="h-[33px] w-[43px]"
                />
              </NavLink>
            </div>

            {/* Right Actions */}

            <div className="flex flex-1 items-center justify-end gap-3">
              {/* Language */}

              <AnimatedButton
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-white/10
                  hover:bg-white
                "
              >
                <AnimatedSwapIcon
                  firstIcon="/icons/language_white.svg"
                  secondIcon="/icons/language.svg"
                />
              </AnimatedButton>

              {/* Flight Estimate */}

              <AnimatedButton
                className="
                  rounded-full
                  border
                  border-white/10
                  px-8
                  text-white
                  hover:bg-white
                  hover:text-[#0B2D63]
                "
              >
                <AnimatedSwapText first="Flight estimate" second="Book Now →" />
              </AnimatedButton>
            </div>
          </div>

          {/* ========================= Mobile Header ========================= */}

          <div className="flex h-full items-center justify-between md:hidden">
            {/* Language */}

            <AnimatedButton
              className="
                h-11
                w-11
                rounded-full
                border
                border-white/20
                hover:bg-white
                active:scale-95
              "
              aria-label="Language"
            >
              <AnimatedSwapIcon
                firstIcon="/icons/language_white.svg"
                secondIcon="/icons/language.svg"
              />
            </AnimatedButton>

            {/* Logo */}

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center"
            >
              <img
                src="/images/logo/logo_white.svg"
                alt="Logo"
                className="h-[33px] w-[43px]"
              />
            </NavLink>

            {/* Menu */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                transition-transform
                duration-300
                active:scale-95
              "
            >
              {menuOpen ? (
                <X size={22} className="text-[#0B2D63]" />
              ) : (
                <Menu size={22} className="text-[#0B2D63]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================= Mobile Drawer ========================= */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          md:hidden
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        {/* Backdrop */}

        <div
          onClick={() => setMenuOpen(false)}
          className={`
            absolute
            inset-0
            bg-black/35
            backdrop-blur-sm
            transition-opacity
            duration-500
            ${menuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Drawer */}

        <div
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-full
            flex-col
            bg-[#0B2D63]
            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Top spacing */}

          <div className="h-[95px]" />

          {/* Navigation */}

          <nav className="flex-1 px-8">
            <ul className="space-y-7">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className={`
                    transition-all
                    duration-700
                    ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="group inline-block overflow-hidden"
                  >
                    <AnimatedText height="h-12" translate="-translate-y-12">
                      <span className="text-[42px] font-light leading-none tracking-[-1px]">
                        {item.name}
                      </span>
                    </AnimatedText>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom */}

          <div
            className={`
              border-t
              border-white/10
              px-8
              py-8
              transition-all
              duration-700
              delay-300
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            <AnimatedButton
              className="
                w-full
                rounded-full
                border
                border-white/20
                text-white
                hover:bg-white
                hover:text-[#0B2D63]
              "
            >
              <AnimatedSwapText first="Flight Estimate" second="Book Now →" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
}