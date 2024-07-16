import React from "react";
import {
  FaCar,
  FaWrench,
  FaSprayCan,
  FaHandSparkles,
  FaToolbox,
  FaPaintRoller,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Interior Detailing",
    description:
      "Thorough cleaning and restoration of the interior surfaces of your vehicle, including vacuuming, upholstery cleaning, and leather conditioning.",
    icon: <FaHandSparkles className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Exterior Detailing",
    description:
      "Comprehensive exterior cleaning and polishing to restore the shine and protect your vehicle's paint and exterior surfaces.",
    icon: <FaSprayCan className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Engine Bay Cleaning",
    description:
      "Cleaning and degreasing of the engine bay to remove dirt, grease, and grime, enhancing performance and longevity.",
    icon: <FaWrench className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Paint Correction",
    description:
      "Professional polishing and buffing to remove swirl marks, scratches, and imperfections from your vehicle's paint surface.",
    icon: <FaPaintRoller className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Mobile Service",
    description:
      "Convenient on-site service at your location, ensuring your vehicle receives top-quality detailing without leaving your home or office.",
    icon: <FaCar className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Interior Protection",
    description:
      "Application of protective coatings and treatments to preserve and shield your vehicle's interior from wear, tear, and stains.",
    icon: <FaToolbox className="h-8 w-8 text-orange-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-5">
      <div className="py-5  w-full  px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#D6D6D6] to-[#F2F2F2] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
