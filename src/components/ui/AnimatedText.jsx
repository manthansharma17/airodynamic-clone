import React from "react";

export default function AnimatedText({
  children,
  className = "",
  duration = "duration-700",
}) {
  return (
    <span
      className={`relative inline-grid overflow-hidden text-current ${className}`}
    >
      <span
        className={`
          col-start-1
          row-start-1
          text-current
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        `}
      >
        {children}
      </span>

      <span
        className={`
          col-start-1
          row-start-1
          translate-y-full
          text-current
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:translate-y-0
        `}
      >
        {children}
      </span>
    </span>
  );
}
