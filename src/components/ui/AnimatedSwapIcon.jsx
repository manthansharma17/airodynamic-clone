import React from "react";

export default function AnimatedSwapIcon({
  firstIcon,
  secondIcon,
  size = "h-4 w-4",
  height = "h-11",
  duration = "duration-500",
}) {
  return (
    <div className={`overflow-hidden ${height}`}>
      <div
        className={`
          transition-transform
          ${duration}
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-full
        `}
      >
        <div className={`flex ${height} items-center justify-center`}>
          <img src={firstIcon} className={size} alt="" />
        </div>

        <div className={`flex ${height} items-center justify-center`}>
          <img src={secondIcon} className={size} alt="" />
        </div>
      </div>
    </div>
  );
}
