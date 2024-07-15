import { Slant } from "hamburger-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 flex justify-between w-full px-4 pt-2 mb-2 z-30 bg-white shadow-md">
      <Link to="/" onClick={closeMenu} className="z-20 pt-2 lg:pt-4 pb-1">
        <div className="flex gap-2">
          <div className="font-extrabold text-[40px] lg:text-5xl tracking-tighter hover:scale-105 duration-200 ease-in-out">
            LOGO
          </div>
        </div>
      </Link>
      <div className="lg:hidden flex self-end z-10">
        <Slant toggled={isOpen} toggle={setIsOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 w-full h-full flex flex-col justify-between tracking-widest pt-24 shadow-lg bg-white "
            >
              <ul className="grid grid-cols-1 w-full py-4 justify-items-center gap-10 font-medium text-3xl">
                <li>
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className={`duration-200 ease-in-out ${
                      location.pathname === "/"
                        ? "underline decoration-1 underline-offset-4"
                        : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`duration-200 ease-in-out ${
                      location.pathname === "/about"
                        ? "underline decoration-1 underline-offset-4"
                        : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={closeMenu}
                    className={`duration-200 ease-in-out ${
                      location.pathname === "/services"
                        ? "underline decoration-1 underline-offset-4"
                        : ""
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`duration-200 ease-in-out ${
                      location.pathname === "/contact"
                        ? "underline decoration-1 underline-offset-4"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="text-center px-8 py-1 rounded-full mt-4 duration-200 ease-in-out cursor-pointer bg-blue-400 text-white">
                  <a href="/contact" rel="noreferrer noopener">
                    Book Now
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ul className="hidden lg:flex gap-5 text-2xl font-medium pt-4 ">
        <li>
          <Link
            to="/"
            className={`duration-200 ease-in-out ${
              location.pathname === "/"
                ? "underline decoration-1 underline-offset-4"
                : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`duration-200 ease-in-out ${
              location.pathname === "/about"
                ? "underline decoration-1 underline-offset-4"
                : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`duration-200 ease-in-out ${
              location.pathname === "/services"
                ? "underline decoration-1 underline-offset-4"
                : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`duration-200 ease-in-out ${
              location.pathname === "/contact"
                ? "underline decoration-1 underline-offset-4"
                : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="duration-200 ease-in-out rounded-full text-lg w-28 h-8 text-center flex items-center justify-center border bg-blue-400 text-white">
          <Link to="/contact">Book Now</Link>
        </li>
      </ul>
    </nav>
  );
}
