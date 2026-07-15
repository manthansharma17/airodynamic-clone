import React from "react";

export default function AnimatedButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        group
        overflow-hidden
        transition-all
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]
        ${className}
      `}
    >
      {children}
    </button>
  );
}
