import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logoImg from "../src/assets/THIS-AI.svg";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const logoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-md"
      ref={ref}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src={logoImg} alt="This-AI Logo" className="w-32 h-auto" />
          </ScrollLink>
        </motion.div>

        {/* Desktop Navbar */}
        <motion.div
          variants={navbarVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="hidden lg:flex items-center space-x-8"
        >
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-gray-700 font-semibold">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full py-2 px-4 pl-10 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>

          {/* Call to Action Button */}
          <a href="https://soulsborne-261a4.web.app/" target="_blank">
            <motion.button
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Get Started
            </motion.button>
          </a>
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="text-gray-700 text-2xl cursor-pointer"
          >
            <FaBars />
          </motion.div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isSidebarOpen ? "visible" : "hidden"}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 bg-blue-700 text-white">
          <h2 className="text-xl font-bold">This-AI</h2>
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="cursor-pointer"
          >
            <FaTimes className="text-2xl text-white" />
          </motion.div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-6 p-6 text-white">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
              className="text-lg hover:text-blue-200 hover:bg-blue-800 p-2 rounded-lg transition duration-300 cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8 text-white">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
