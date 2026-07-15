import React from "react";

export default function AnimatedText({
  children,
  duration = "duration-700",
  className = "",
}) {
  return (
    <span
      className={`relative inline-block overflow-hidden leading-none ${className}`}
    >
      <span
        className={`
          block
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
          absolute
          left-0
          top-full
          block
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        `}
      >
        {children}
      </span>
    </span>
  );
}
