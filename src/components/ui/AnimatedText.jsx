import React from "react";

export default function AnimatedText({
  children,
  className = "",
  height = "h-11",
  duration = "duration-500",
  translate = "-translate-y-11",
  ease = "ease-[cubic-bezier(.22,1,.36,1)]",
}) {
  return (
    <div
      className={`
        ${height}
        overflow-hidden
        ${className}
      `}
    >
      <div
        className={`
          h-fit
          transition-transform
          ${duration}
          ${ease}
          group-hover:${translate}
        `}
      >
        <div className={`flex ${height} items-center justify-center`}>
          {children}
        </div>

        <div className={`flex ${height} items-center justify-center`}>
          {children}
        </div>
      </div>
    </div>
  );
}
