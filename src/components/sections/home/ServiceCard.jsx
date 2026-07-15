import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";


const ServiceCard = ({ service }) => {

    const handleMouseMove = (e) => {
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
});
    };

    const handleMouseLeave = (e) => {
      const image = e.currentTarget.querySelector(".card-image");

gsap.to(image, {
  x: 0,
  y: 0,
  scale: 1,
  duration: 0.8,
  ease: "power3.out",
});
    };





  return (
    <article
      className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}

      <img
        src={service.image}
        alt={service.title}
        className="card-image absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 object-cover will-change-transform" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
        <div className="max-w-[70%]">
          <h3 className="text-4xl font-semibold text-white">{service.title}</h3>

          <p className="mt-3 text-lg leading-relaxed text-white/80">
            {service.description}
          </p>
        </div>

        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
          <ArrowUpRight className="h-6 w-6 text-[#0B2D63]" />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;
