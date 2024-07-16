// src/pages/Homepage.tsx
import React from "react";
import ReviewsCarousel from "../components/reviews-carousel";
import {
  FaCar,
  FaHandSparkles,
  FaPaintRoller,
  FaSprayCan,
} from "react-icons/fa";

const Home: React.FC = () => {
  const services = [
    {
      title: "Exterior Detailing",
      icon: <FaSprayCan className="h-8 w-8 text-green-500" />,
      description:
        "Thorough wash, wax, and polish to make your car shine like new.",
    },
    {
      title: "Interior Detailing",
      icon: <FaHandSparkles className="h-8 w-8 text-blue-500" />,
      description:
        "Deep cleaning of seats, carpets, and all interior surfaces.",
    },
    {
      title: "Paint Correction",
      icon: <FaPaintRoller className="h-8 w-8 text-red-500" />,
      description:
        "Detailed cleaning of the engine bay to keep it looking pristine.",
    },
    {
      title: "Mobile Service",
      icon: <FaCar className="h-8 w-8 text-purple-500" />,
      description:
        "Detailed cleaning of the engine bay to keep it looking pristine.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center py-5 ">
      <div className="w-full ">
        {/* Hero Section */}

        <section
          className="relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: "url(/car-img.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#2C343A] bg-opacity-40"></div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Premium Car Detailing</h1>
            <p className="text-xl mb-8">
              Professional care for your car, inside and out.
            </p>
            <a
              href="/contact"
              className="bg-[#F17F29] text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Book an Appointment
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10 bg-white px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 flex flex-col h-full bg-gradient-to-tr from-[#D6D6D6] to-[#F2F2F2]"
                >
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    {service.icon}
                  </div>
                  <p className="text-gray-700 text-left">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/services"
              className="mt-8 inline-block bg-[#F17F29] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#e37025]"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto  text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <img
              src="/about-img-2.jpg"
              alt="about us"
              className="rounded-lg mx-auto"
            />
            <p className=" max-w-2xl mx-auto pt-4">
              At Prestige Car Detailing, we are passionate about cars and
              committed to providing the highest level of service. Our team of
              experienced professionals uses the latest techniques and products
              to ensure your car looks its best.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 bg-white px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <ReviewsCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Ready to book your detailing appointment? Get in touch with us
              today!
            </p>
            <a
              href="mailto:contact@prestigedetailing.com"
              className="bg-[#F17F29] text-white font-semibold py-3 px-6 rounded-lg shadow-md "
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
