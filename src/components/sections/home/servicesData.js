import privateJet from "/images/service1.webp";
import management from "/images/service2.jpeg";
import charter from "/images/service3.png";

const services = [
  {
    id: 1,
    title: "Private flights",
    description: "Extra capacity when it matters.",
    image: privateJet,
  },
  {
    id: 2,
    title: "Aircraft management",
    description:
      "Your jet. We orchestrate. Precise, efficient and professional.",
    image: management,
  },
  {
    id: 3,
    title: "Charter flights",
    description:
      "From business travel to group and incentive flights: tailor-made air transport with complete flexibility.",
    image: charter,
  },
  {
    id: 4,
    title: "Cargo flights",
    description: "Secure worldwide cargo operations with flexible scheduling.",
    image: privateJet,
  },
  {
    id: 5,
    title: "Medical flights",
    description: "Fast medical evacuation and critical patient transport.",
    image: management,
  },
  {
    id: 6,
    title: "VIP Concierge",
    description: "Luxury ground handling and premium travel assistance.",
    image: charter,
  },
];

export default services;
