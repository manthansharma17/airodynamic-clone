import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { lenis } from "../../animations/lenis";
import AnimatedLink from "@/components/sections/model/ui/AnimatedLink";
import AnimatedButton from "@/components/sections/model/ui/AnimatedButton";
import AnimatedSwapText from "@/components/sections/model/ui/AnimatedSwapText";
import AnimatedSwapIcon from "@/components/sections/model/ui/AnimatedSwapIcon";
import AnimatedText from "@/components/sections/model/ui/AnimatedText";
import Checkbox from "@/components/sections/model/ui/hamburger";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const scrollToSection = (id) => {
  lenis.scrollTo(`#${id}`);
  setMenuOpen(false);
};

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Insights", id: "insights" },
  { name: "Contact", id: "contact" },
  {name: "Model", id: "model"},
];



  return (
    <>
      <header className="absolute inset-x-0 top-0 z-[70] px-6 pt-3">
        <div className="mx-auto h-[70px] w-full">
          {/* ========================= Desktop ========================= */}

          <div className="hidden h-full items-center px-[30px] lg:flex">
            {/* Left Navigation */}

            <div className="flex-1">
              <nav>
                <ul className="flex items-center gap-10">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <AnimatedLink
                        onClick={() => scrollToSection(item.id)}
                        className="text-sm font-medium text-white transition-colors"
                      >
                        {item.name}
                      </AnimatedLink>
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

          <div className="flex h-full items-center justify-between lg:hidden  ">
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

            <div className="flex h-11 w-11 items-center justify-center border border-white/20  rounded-full bg-transparent lg:hidden">
              <Checkbox
                checked={menuOpen}
                onChange={() => setMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ========================= Mobile Drawer ========================= */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          lg:hidden
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
            z-150
            top-0
            flex
            h-full
            w-[300px]
            flex-col
            bg-black/20
            
            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Top spacing */}

          <div className="h-[175px]" />

          {/* Navigation */}

          <nav className="flex-1 px-8 py-2">
            <ul className="flex flex-col gap-4">
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
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="group inline-block overflow-hidden text-left"
                  >
                    <AnimatedText className="group-hover:text-zinc-400 h-[42px]">
                      <span className="text-[36px] font-light leading-none tracking-[-1px]">
                        {item.name}
                      </span>
                    </AnimatedText>
                  </button>
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
