import { motion, useAnimation } from "framer-motion";
import {
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    Icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud services to power your applications.",
  },
  {
    id: 2,
    Icon: FaShieldAlt,
    title: "Cyber Security",
    description: "Protect your data with cutting-edge security measures.",
  },
  {
    id: 3,
    Icon: FaCogs,
    title: "Automation",
    description: "Streamline workflows with intelligent automation tools.",
  },
  {
    id: 4,
    Icon: FaLightbulb,
    title: "Innovation",
    description: "Revolutionary solutions tailored for your growth.",
  },
  {
    id: 5,
    Icon: FaMobileAlt,
    title: "Mobile Development",
    description: "Create seamless mobile experiences.",
  },
  {
    id: 6,
    Icon: FaDatabase,
    title: "Database Management",
    description: "Efficiently store and retrieve your data.",
  },
  {
    id: 7,
    Icon: FaRobot,
    title: "AI Integration",
    description: "Empowering businesses with AI-driven solutions.",
  },
  {
    id: 8,
    Icon: FaChartBar,
    title: "Analytics",
    description: "Make informed decisions with powerful analytics.",
  },
];

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20 overflow-hidden"
      id="services"
    >
      {/* Background Shapes */}
      <motion.div
        className="absolute top-[-10%] left-[-15%] w-[300px] h-[300px] bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full filter blur-3xl opacity-50"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full filter blur-3xl opacity-50"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Content */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            Discover how we empower your business with cutting-edge solutions
            and tailored expertise.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 hover:shadow-xl transition duration-300"
              variants={fadeIn}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 * index }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-3xl mb-4">
                <service.Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
