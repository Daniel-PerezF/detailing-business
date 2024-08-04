import { motion } from "framer-motion";
import useInView from "../components/use-in-view";

const About: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="px-4 w-full py-8 max-w-4xl" ref={aboutRef}>
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: aboutInView ? 1 : 0,
            y: aboutInView ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
          <motion.div
            className="flex items-center justify-center w-full max-w-4xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              x: aboutInView ? 0 : -20,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full aspect-[16/9] object-cover"
            />
          </motion.div>
          <motion.div
            className="text-center lg:text-left pr-0 lg:pr-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              x: aboutInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              We are passionate about providing top-quality mobile car detailing
              services to our customers. With years of experience and dedication
              to excellence, we ensure every vehicle receives the utmost care
              and attention to detail.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of skilled professionals uses the latest techniques and
              high-quality products to achieve outstanding results. Whether it's
              interior detailing, exterior cleaning, or paint correction, we
              strive to exceed expectations and leave your vehicle looking like
              new.
            </p>
            <p className="text-gray-600">
              Customer satisfaction is our priority, and we take pride in
              delivering exceptional service right to your doorstep. Contact us
              today to experience the convenience and excellence of our mobile
              car detailing services.
            </p>
          </motion.div>
        </div>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              y: aboutInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Our mission is to provide exceptional mobile car detailing
              services that exceed our customers' expectations. We are committed
              to delivering quality, convenience, and customer satisfaction with
              every service we offer.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              y: aboutInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Book Now</h2>
            <p className="text-gray-600 mb-4">
              Ready to give your car the ultimate detailing experience? Contact
              us today to book your appointment.
            </p>
            <button className="bg-[#F17F29] text-white py-2 px-4 rounded-lg ">
              Book Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
