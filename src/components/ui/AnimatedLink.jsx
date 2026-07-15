import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";

export default function AnimatedLink({
  to,
  children,
  underline = true,
  className = "",
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        group
        relative
        block
        h-7
        overflow-hidden
        ${className}

        ${
          underline
            ? `
            before:absolute
            before:left-0
            before:bottom-0
            before:h-[1.5px]
            before:w-full
            before:bg-[#0B2D63]
            before:origin-left
            before:transition-transform
            before:duration-500

            after:absolute
            after:left-0
            after:bottom-0
            after:h-[1.5px]
            after:w-full
            after:bg-[#9CA3AF]
            after:origin-left
            after:transition-transform
            after:duration-500
            `
            : ""
        }

        ${
          underline
            ? isActive
              ? "before:scale-x-100 after:scale-x-0"
              : "before:scale-x-0 after:scale-x-0 hover:after:scale-x-100"
            : ""
        }
      `
      }
    >
      <AnimatedText
        height="h-6"
        duration="duration-700"
        translate="-translate-y-6"
      >
        {children}
      </AnimatedText>
    </NavLink>
  );
}
