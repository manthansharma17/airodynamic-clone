import { CircleFadingPlus } from "lucide-react";
import InstagramCard from "./InstagramCard";
import instagramPosts from "./instagramData";

const InstagramSection = () => {
  return (
    <section className="bg-white py-24 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        {/* Heading */}
        <div className="mb-16 py-20 text-center">
          <h2 className="font-heading text-[40px] leading-none tracking-[-3px] text-[#0B2D63]">
            Follow us on <span className="italic">Instagram</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {instagramPosts.map((post) => (
            <InstagramCard key={post.id} post={post} />
          ))}
        </div>

        {/* Instagram Handle */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-transparent pb-1 transition-all hover:border-[#0B2D63]"
          >
            <CircleFadingPlus
              size={20}
              className="text-[#0B2D63] transition-transform duration-300 group-hover:scale-110"
            />
            
            <span className="text-lg py-2 font-medium text-[#0B2D63]">
              aerodynamicsprivatejets
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
