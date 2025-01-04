import { useState } from "react";
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

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src={logoImg} alt="This-AI Logo" className="w-32 h-auto" />
          </ScrollLink>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center space-x-8">
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
        </div>

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
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 bg-blue-600 text-white">
          <h2 className="text-xl font-bold">This-AI</h2>
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="cursor-pointer"
          >
            <FaTimes className="text-2xl" />
          </motion.div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4 p-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={closeSidebar}
              className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8 text-gray-600">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
