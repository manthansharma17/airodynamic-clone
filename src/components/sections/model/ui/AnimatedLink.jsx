import { NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";

export default function AnimatedLink({
  to,
  children,
  className = "",
  onClick,
}) {
  const content = (
    <>
      <AnimatedText>{children}</AnimatedText>

      <span
        className="
          absolute
          left-0
          bottom-0
          h-[1px]
          w-0
          bg-current
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </>
  );

  // Scroll button
  if (!to) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative inline-flex overflow-hidden ${className}`}
      >
        {content}
      </button>
    );
  }

  // React Router link
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`group relative inline-flex overflow-hidden ${className}`}
    >
      {content}
    </NavLink>
  );
}
