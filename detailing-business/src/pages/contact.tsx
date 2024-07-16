import { motion } from "framer-motion";
import useInView from "../components/use-in-view";

const Contact: React.FC = () => {
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-5">
      <div className="px-4 w-full " ref={contactRef}>
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: contactInView ? 1 : 0,
              x: contactInView ? 0 : -20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Have a question or want to book an appointment? Fill out the form
              below, and we'll get back to you as soon as possible.
            </p>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-800 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#F17F29]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-800 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#F17F29]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#F17F29]"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-[#F17F29] text-white rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: contactInView ? 1 : 0,
              x: contactInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-600">
                For inquiries or appointments, you can also reach us through the
                following:
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-[#F17F29]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14m0-14V3a9 9 0 00-9 9c0 3.038 1.534 5.75 3.863 7.386a.75.75 0 001.1-.845l-.845-3.379c-.131-.525.289-1.05.845-1.05h5.379c.556 0 .976.525.845 1.05l-.845 3.379a.75.75 0 001.1.845C18.466 17.75 20 15.038 20 12a9 9 0 00-9-9z"
                />
              </svg>
              <p className="text-gray-800">101 Shine Rd, Sedona, AZ 86336</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-[#F17F29]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <a href="tel:+1234567890" className="text-gray-800">
                +1 (928) 987-4321
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-[#F17F29]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <a href="mailto:info@cardetailing.com" className="text-gray-800">
                contact@prestigedetailing.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
