import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaBrain,
  FaChalkboardTeacher,
  FaRobot,
  FaLightbulb,
  FaBook,
  FaNetworkWired,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";
import { Button } from "./components/ui/button";
import heroImg from "../src/assets/hero-img.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const textControls = useAnimation();
  const featuresControls = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false, // Re-trigger animations when scrolling back
    threshold: 0.2, // Start animation when 20% of the element is visible
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textInView]);

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    } else {
      featuresControls.start("hidden");
    }
  }, [featuresInView]);

  return (
    <div
      className="relative bg-gradient-to-br from-white to-blue-50 text-gray-900 overflow-hidden min-h-screen flex flex-col justify-center"
      id="home"
    >
      {/* Floating Animated Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-violet-300 rounded-full filter blur-xl opacity-40"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-72 h-72 bg-yellow-300 rounded-full filter blur-2xl opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          ref={textRef}
        >
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={textControls}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 max-md:mt-20">
              Discover the Future with{" "}
              <span className="text-yellow-400">This-AI</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 text-gray-700">
              This-AI is revolutionizing education by integrating cutting-edge
              AI technologies. From personalized learning paths to interactive
              chatbots, we empower learners to achieve their goals.
            </p>
            <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
              <a href="https://soulsborne-261a4.web.app/" target="_blank">
                <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
                  Get Started
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={heroImg}
              alt="AI Innovation Illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={featuresRef}
          variants={fadeInUp}
          initial="hidden"
          animate={featuresControls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { id: 1, Icon: FaBrain, title: "AI-Powered Insights" },
            { id: 2, Icon: FaChalkboardTeacher, title: "Expert-Led Learning" },
            { id: 3, Icon: FaRobot, title: "Interactive Chatbot" },
            { id: 4, Icon: FaLightbulb, title: "Innovative Solutions" },
            { id: 5, Icon: FaBook, title: "Personalized Courses" },
            { id: 6, Icon: FaNetworkWired, title: "Collaborative Tools" },
            { id: 7, Icon: FaGlobe, title: "Global Access" },
            { id: 8, Icon: FaChartLine, title: "Performance Analytics" },
          ].map((feature) => (
            <motion.div
              key={feature.id}
              className="flex items-center space-x-4 bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <feature.Icon className="text-indigo-500 text-4xl" />
              <span className="text-lg font-medium text-gray-700">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
