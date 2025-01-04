import { motion } from "framer-motion";
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
import heroImg from "../src/assets/hero-img.png"
const Hero = () => (
  <div
    className="relative bg-gradient-to-br from-white to-blue-50 text-gray-900 overflow-hidden min-h-screen flex flex-col justify-center"
    id="home"
  >
    {/* Gradient Waves Background */}
    <div className="absolute inset-0 z-0 md:mt-20 max-md:hidden max-md:mt-20">
     
      <svg
        className="absolute bottom-0 w-full h-48 sm:h-96"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#gradientBottom)"
          d="M0,96L60,106.7C120,117,240,139,360,154.7C480,171,600,181,720,186.7C840,192,960,192,1080,176C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="gradientBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ebf8ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Main Content */}
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-6 max-md:mt-20">
            Discover the Future with{" "}
            <span className="text-yellow-400">This-AI</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 text-gray-700">
            This-AI is revolutionizing education by integrating cutting-edge AI
            technologies. From personalized learning paths to interactive
            chatbots, we empower learners to achieve their goals. Our platform
            fosters collaboration, ensures global accessibility, and delivers
            real-time performance analytics, making education more inclusive,
            engaging, and impactful than ever before.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
            <a href="https://soulsborne-261a4.web.app/" target="_blank">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300">
                Get Started
              </Button>
            </a>
          </motion.div>
        </div>

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
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </div>
  </div>
);

export default Hero;
