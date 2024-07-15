// src/pages/Homepage.tsx
import React from "react";
import ReviewsCarousel from "../components/reviews-carousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}

      <section className="relative bg-cover bg-center text-white py-20">
        <div className="absolute inset-0 bg-[#30362F] bg-opacity-60 "></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Premium Car Detailing</h1>
          <p className="text-xl mb-8">
            Professional care for your car, inside and out.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#30362F] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  Exterior Detailing
                </h3>
                <p className="text-gray-700 flex-grow">
                  Thorough wash, wax, and polish to make your car shine like
                  new.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  Interior Detailing
                </h3>
                <p className="text-gray-700 flex-grow">
                  Deep cleaning of seats, carpets, and all interior surfaces.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4">
                  Engine Detailing
                </h3>
                <p className="text-gray-700 flex-grow">
                  Detailed cleaning of the engine bay to keep it looking
                  pristine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At Premium Car Detailing, we are passionate about cars and committed
            to providing the highest level of service. Our team of experienced
            professionals uses the latest techniques and products to ensure your
            car looks its best.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            Ready to book your detailing appointment? Get in touch with us
            today!
          </p>
          <a
            href="mailto:info@premiumcardetailing.com"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
