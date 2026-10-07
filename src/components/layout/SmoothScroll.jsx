import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenis } from "../../animations/lenis";

// Lenis is a module-level singleton (see animations/lenis.js) that lives for
// the whole app, so it must not be destroyed here: StrictMode's dev-only
// unmount/remount would kill it and dev would behave differently from prod.
export default function SmoothScroll({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // On a real network, images and web fonts arrive after ScrollTrigger has
    // measured the page, which leaves pinned sections offset. Re-measure once
    // they have loaded.
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh);

    document.fonts?.ready.then(refresh);

    return () => window.removeEventListener("load", refresh);
  }, []);

  // Start each new page at the top (hash links are handled by Home).
  useEffect(() => {
    if (!hash) lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname, hash]);

  return children;
}
