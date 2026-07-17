import { useEffect } from "react";
import { lenis } from "../../animations/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
