import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function navbarScroll() {
  const navbar = document.querySelector(".navbar");

  let hidden = false;

  ScrollTrigger.create({
    start: 0,
    end: "max",

    onUpdate(self) {
      if (self.direction === 1 && !hidden) {
        hidden = true;

        gsap.to(navbar, {
          yPercent: -120,
          duration: 0.35,
          ease: "power3.out",
        });
      }

      if (self.direction === -1 && hidden) {
        hidden = false;

        gsap.to(navbar, {
          yPercent: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    },
  });
}
