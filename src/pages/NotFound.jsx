import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-nachtblauw px-6 text-center">
      <p className="text-sm font-semibold text-hemelsblauw">404</p>

      <h1 className="pb-6 font-heading text-[42px] leading-none tracking-[-1px] text-white sm:text-[56px]">
        This page has <span className="font-sub italic">flown</span> away
      </h1>

      <NavLink
        to="/"
        className="rounded-full border border-white/20 px-8 py-3 text-white transition-colors hover:bg-white hover:text-nachtblauw"
      >
        Back to home
      </NavLink>
    </section>
  );
}
