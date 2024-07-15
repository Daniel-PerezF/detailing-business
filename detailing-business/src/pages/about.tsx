const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg px-8 max-w-4xl w-full py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          <div className="flex items-center justify-center max-w-full">
            <img
              src="/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg "
            />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
