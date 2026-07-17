import { NavLink } from "react-router-dom";

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Model", path: "/model" },
  { name: "Insights", path: "/insight" },
  { name: "About us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Private flights", path: "/solutions" },
  { name: "Charters", path: "/solutions" },
  { name: "Specials", path: "/solutions" },
];

const legalLinks = [
  { name: "Privacy Statement", path: "/privacy" },
  { name: "Terms and conditions", path: "/terms" },
];

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="text-sm text-nachtblauw transition-colors duration-200 hover:text-nachtblauw/60"
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-nachtblauw">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Top */}
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm pb-3">
            <NavLink to="/" className="flex-col items-center gap-4">
              <img 
                src="/images/logo/logo.svg"
                alt="Aerodynamics"
                className="h-8 py-2 w-auto"
              />
              <span className="font-heading py- 1 text-2xl text-nachtblauw">
                Aerodynamics-clone
              </span>
            </NavLink>

            <p className="mt-6 text-sm leading-7 text-nachtblauw/60">
              Aerodynamics offers exclusive, tailor-made flights with a focus on
              comfort, flexibility and outstanding service.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-16">
            <div>
              <h3 className="mb-6 text-sm text-nachtblauw/40">Pages</h3>
              <ul className="space-y-4">
                {pageLinks.map((item) => (
                  <li key={item.name}>
                    <FooterLink to={item.path}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm text-nachtblauw/40">Services</h3>
              <ul className="space-y-4">
                {serviceLinks.map((item) => (
                  <li key={item.name}>
                    <FooterLink to={item.path}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-6 text-sm text-nachtblauw/40">Contact</h3>

              <address className="not-italic text-sm leading-7 text-nachtblauw">
                INDR-CITY
                <br />
               452012

              </address>

              <div className="mt-4 space-y-1">
                <a
                  href="tel:+31206041667"
                  className="block text-sm text-nachtblauw underline decoration-nachtblauw/20 underline-offset-4 hover:decoration-nachtblauw"
                >
                  +91 9179*****06
                </a>
                <a
                  href="mailto:info@aerodynamics.nl"
                  className="block text-sm text-nachtblauw underline decoration-nachtblauw/20 underline-offset-4 hover:decoration-nachtblauw"
                >
                  manthan#$%*&&0@gmail.com
                </a>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-white transition-opacity hover:opacity-80"
                >
                 <img src="/icons/linkdin.svg" alt="" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-white transition-opacity hover:opacity-80"
                >
                 <img src="/icons/instagram.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-nachtblauw/10 pt-8 text-sm text-nachtblauw/50 sm:flex-row sm:justify-between">
          <p>© 2026 Aerodynamics-clone</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="hover:text-nachtblauw"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <p>
            Website by{" "}
            <a
              href="https://manthansharma.com/"
              target="_blank"
              rel="noreferrer"
              className="text-nachtblauw hover:underline"
            >
              Manthan Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
