import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger);


export default function planeAnimation(planeRef) {
  const ctx = gsap.context(() => {
 const plane = planeRef.current;

    const windowContainer = plane.querySelector(".window-container");
    const skyContainer = plane.querySelector(".sky-container");
    // const heroCopy = plane.querySelector(".hero-copy");
    const windowHeader = plane.querySelector(".window-header");
    const skyText = plane.querySelector(".sky-text");

    // Recomputed on every refresh so resizes/orientation changes stay correct.
    let skyMoveDistance = 0;
    const measureSky = () => {
      skyMoveDistance = window.innerHeight - skyContainer.offsetHeight;
    };
    measureSky();

    // ----------------------------------------------------
    // INITIAL STATE
    // ----------------------------------------------------

    // if (heroCopy) {
    //   gsap.set(heroCopy, {
    //     yPercent: 100,
    //   });
    // }

    // ----------------------------------------------------
    // SCROLLTRIGGER
    // ----------------------------------------------------

    ScrollTrigger.create({
      trigger: plane,
      start: "top top",
      end: () => `+=${window.innerHeight * 2}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onRefresh: measureSky,

      onUpdate: (self) => {
        const progress = self.progress;

        // Grows continuously and caps at 6 (previously jumped 4.75 -> 6 at 0.5).
        const windowScale = Math.min(1 + (progress / 0.4) * 3, 6);

        // Window Zoom
        gsap.set(windowContainer, {
          scale: windowScale,
        });

        // Header Zoom
        gsap.set(windowHeader, {
          scale: windowScale,
          z: progress * 600,
        });

        // Sky Movement
        gsap.set(skyContainer, {
          y: progress * skyMoveDistance,
        });

        // Sky Text
        gsap.set(skyText, {
          xPercent: (-30 * progress) / 0.15,
        });

        // ------------------------------------------------
        // HERO COPY (currently disabled like original)
        // ------------------------------------------------

        
        // let heroCopyY;

        // if (progress <= 0.83) {
        //   heroCopyY = 100;
        // } else if (progress >= 1) {
        //   heroCopyY = 0;
        // } else {
        //   heroCopyY = 100 * (1 - (progress - 0.83) / 0.7);
        // }

        // gsap.to(heroCopy, {
        //   y: -120,
        //   duration: 1,
        // });
        
      },
    });

    // Refresh after everything is calculated
    ScrollTrigger.refresh();
  }, planeRef);

  return ctx;
}