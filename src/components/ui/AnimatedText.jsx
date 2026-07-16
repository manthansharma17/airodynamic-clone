import React from "react";

export default function AnimatedText({
  children,
  className = "",
  duration = "duration-800",
}) {
  return (
    <span
      className={`relative inline-grid overflow-hidden ${className}`}
    >
      {/* First text */}
      <span
        className={`
          col-start-1
          row-start-1
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        `}
      >
        {children}
      </span>

      {/* Second text */}
      <span
        className={`
          col-start-1
          row-start-1
          translate-y-full
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
