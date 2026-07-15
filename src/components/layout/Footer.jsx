import { NavLink } from "react-router-dom";
import AnimatedLink from "../ui/AnimatedLink";
import AnimatedButton from "../ui/AnimatedButton";
import AnimatedSwapText from "../ui/AnimatedSwapText";

export default function Footer() {
  return (
    <footer className="bg-[#0B2D63] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top */}
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          {/* Left */}

          <div className="max-w-xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/60">
              Aerodynamics
            </p>

            <h2 className="font-heading text-5xl leading-none md:text-6xl">
              Let's fly together.
            </h2>

            <p className="mt-8 max-w-md text-white/70 leading-8">
              Experience private aviation with unmatched comfort, flexibility
              and luxury.
            </p>

            <AnimatedButton
              className="
              mt-12
              rounded-full
              border
              border-white/20
              px-8
              hover:bg-white
              hover:text-[#0B2D63]
            "
            >
              <AnimatedSwapText first="Flight Estimate" second="Book Now →" />
            </AnimatedButton>
          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-16 md:grid-cols-3">
            <div>
              <h3 className="mb-6 text-white/40">Navigation</h3>

              <div className="space-y-4">
                <AnimatedLink underline={false} to="/">
                  Home
                </AnimatedLink>

                <AnimatedLink underline={false} to="/solutions">
                  Solutions
                </AnimatedLink>

                <AnimatedLink underline={false} to="/model">
                  Model
                </AnimatedLink>

                <AnimatedLink underline={false} to="/insight">
                  Insight
                </AnimatedLink>

                <AnimatedLink underline={false} to="/about">
                  About
                </AnimatedLink>

                <AnimatedLink underline={false} to="/contact">
                  Contact
                </AnimatedLink>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-white/40">Company</h3>

              <div className="space-y-4">
                <AnimatedLink underline={false} to="/privacy">
                  Privacy
                </AnimatedLink>

                <AnimatedLink underline={false} to="/cookies">
                  Cookies
                </AnimatedLink>

                <AnimatedLink underline={false} to="/terms">
                  Terms
                </AnimatedLink>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-white/40">Social</h3>

              <div className="space-y-4">
                <AnimatedLink underline={false} to="/">
                  Instagram
                </AnimatedLink>

                <AnimatedLink underline={false} to="/">
                  LinkedIn
                </AnimatedLink>

                <AnimatedLink underline={false} to="/">
                  YouTube
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © 2026 Aerodynamics. All rights reserved.
          </p>

          <NavLink to="/">
            <img src="/images/logo/logo_white.svg" alt="Logo" className="h-8" />
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
