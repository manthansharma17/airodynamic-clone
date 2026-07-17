import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const InsightCard = ({ item }) => {
  const imageRef = useRef(null);

  const xTo = useRef(null);
  const yTo = useRef(null);

  const handleMouseEnter = () => {
    xTo.current = gsap.quickTo(imageRef.current, "x", {
      duration: 0.8,
      ease: "power3.out",
    });

    yTo.current = gsap.quickTo(imageRef.current, "y", {
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 16;
    const moveY = (y - 0.5) * 16;

    xTo.current(moveX);
    yTo.current(moveY);
  };

  const handleMouseLeave = () => {
    xTo.current(0);
    yTo.current(0);

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <div
        className="relative h-[420px] overflow-hidden rounded-[28px]"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          src={item.image}
          alt={item.title}
          className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-cover will-change-transform"
        />

        {/* Hover Button */}
        <button className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/95 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5 text-[#0B2D63] transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>

      {/* Content */}
      <div className="pt-6">
        <h3 className="text-[24px] font-basic  leading-[1.2] tracking-[-1px] text-[#0B2D63] transition-colors duration-300 group-hover:text-[#164c8d]">
          {item.title}
        </h3>

        <p className="mt-5 text-lg text-[#5E6B84]">{item.category}</p>
      </div>
    </article>
  );
};

export default InsightCard;
