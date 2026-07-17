import { useRef } from "react";
import { CircleFadingPlus } from "lucide-react";
import gsap from "gsap";

const InstagramCard = ({ post }) => {
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
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (x - 0.5) * 14;
    const moveY = (y - 0.5) * 14;

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
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[22px] lg:py-3 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <img
          ref={imageRef}
          src={post.image}
          alt=""
          className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 object-cover will-change-transform"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Instagram Icon */}
        <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:scale-110">
          <CircleFadingPlus
            size={18}
            className="text-[#0B2D63]"
            strokeWidth={2.2}
          />
        </div>
      </div>
    </a>
  );
};

export default InstagramCard;
