import React from "react";

export default function AnimatedSwapText({
  first,
  second,
  height = "h-11",
  duration = "duration-500",
  className = "",
}) {
  return (
    <div className={`overflow-hidden ${height} ${className}`}>
      <div
        className={`
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        `}
      >
        <div className={`flex ${height} items-center justify-center`}>
          {first}
        </div>

        <div className={`flex ${height} items-center justify-center`}>
          {second}
        </div>
      </div>
    </div>
  );
}
