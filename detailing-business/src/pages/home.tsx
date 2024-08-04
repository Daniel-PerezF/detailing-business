import { motion } from "framer-motion";
import ReviewsCarousel from "../components/reviews-carousel";
import {
  FaCar,
  FaHandSparkles,
  FaPaintRoller,
  FaSprayCan,
} from "react-icons/fa";
import useInView from "../components/use-in-view";

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

  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.6,
    once: true,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.6,
    once: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.6,
    once: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.5,
    once: true,
  });

  return (
    <div className="min-h-screen flex flex-col items-center pb-5 ">
      <div className="w-full ">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: "url(/car-img.jpg)", height: "800px" }}
        >
          <div className="absolute inset-0 bg-[#2C343A] bg-opacity-40"></div>
          <div className="relative container mx-auto px-6 text-center flex top-[25%] flex-col">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Premium Car Detailing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Professional care for your car, inside and out.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#F17F29] text-white font-semibold py-3 px-6 rounded-lg shadow-md w-[225px] mx-auto"
            >
              Book an Appointment
            </motion.a>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-10 bg-white px-4" ref={servicesRef}>
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-6 flex flex-col h-full bg-gradient-to-tr from-[#D6D6D6] to-[#F2F2F2]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: servicesInView ? 1 : 0,
                    y: servicesInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </motion.div>
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
        <motion.section
          className="py-10 px-4"
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="flex flex-col lg:flex-row items-center">
              <img
                src="/about-img-2.jpg"
                alt="about us"
                className="rounded-lg mx-auto lg:mr-8 mb-4 lg:mb-0"
              />
              <p className="max-w-2xl mx-auto pt-4 lg:pt-0 text-lg leading-relaxed">
                Welcome to Prestige Car Detailing, where our passion for cars
                meets an unwavering commitment to excellence. Our team of
                skilled professionals utilizes cutting-edge techniques and
                top-tier products to transform your vehicle, ensuring it looks
                pristine and feels rejuvenated. At Prestige Car Detailing, we
                believe in delivering more than just a service—we provide an
                experience that reflects our dedication to quality and customer
                satisfaction. Trust us to elevate your car's appearance to its
                finest state.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-10 bg-white px-4"
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: testimonialsInView ? 1 : 0,
            y: testimonialsInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <ReviewsCarousel />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20 px-4"
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contactInView ? 1 : 0,
            y: contactInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Ready to book your detailing appointment? Get in touch with us
              today!
            </p>
            <a
              href="/contact"
              className="bg-[#F17F29] text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Book Now!
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
