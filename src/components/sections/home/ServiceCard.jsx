import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const ServiceCard = ({ service }) => {
  const handleMouseMove = (e) => {
    // Disable parallax on touch devices
    if (window.innerWidth < 1024) return;

    const card = e.currentTarget;
    const image = card.querySelector(".card-image");

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    gsap.to(image, {
      x: xPercent * 30,
      y: yPercent * 30,
      scale: 1.08,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e) => {
    if (window.innerWidth < 1024) return;

    const image = e.currentTarget.querySelector(".card-image");

    gsap.to(image, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        cursor-pointer

        h-[420px]
        w-[300px]
        sm:h-[380px]
        md:h-[430px]
        lg:h-[550px]
        lg:w-[500px]
      "
    >
      {/* Image */}

      <img
        src={service.image}
        alt={service.title}
        draggable={false}
        className="
          card-image
          absolute
          left-1/2
          top-1/2
          h-[112%]
          w-[112%]
          -translate-x-1/2
          -translate-y-1/2
          object-cover
          will-change-transform
          select-none
          pointer-events-none
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5

          sm:bottom-7
          sm:left-7
          sm:right-7

          lg:bottom-8
          lg:left-8
          lg:right-8

          flex
          items-end
          justify-between
          gap-4
        "
      >
        <div className="max-w-[72%]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            {service.title}
          </h3>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-white/80">
            {service.description}
          </p>
        </div>

        <button
          className="
            flex
            shrink-0
            items-center
            justify-center

            h-12
            w-12

            sm:h-14
            sm:w-14

            lg:h-16
            lg:w-16

            rounded-full
            bg-white
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          <ArrowUpRight className="h-5 w-5 lg:h-6 lg:w-6 text-[#0B2D63]" />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
