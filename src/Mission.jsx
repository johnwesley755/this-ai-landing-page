import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Mission = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 overflow-hidden py-20"
    >
      {/* Gradient Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-indigo-400 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 bg-gradient-to-l from-yellow-400 to-orange-400 w-80 h-80 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mt-4 text-gray-700"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            At <span className="font-semibold text-indigo-500">This-AI</span>,
            we aim to bridge the gap between technology and education, making
            advanced learning accessible, engaging, and impactful. Our mission
            is to empower learners globally through AI-driven tools and
            personalized educational experiences.
          </motion.p>
        </div>

        {/* Mission Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {[
              {
                id: 1,
                text: "Deliver AI-powered solutions to make education more engaging and accessible.",
              },
              {
                id: 2,
                text: "Create innovative tools to personalize learning experiences for students worldwide.",
              },
              {
                id: 3,
                text: "Foster collaboration and knowledge sharing through global access and advanced technologies.",
              },
            ].map((mission, index) => (
              <motion.div
                key={mission.id}
                className="flex items-start space-x-4"
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.2 * index }}
              >
                <FaCheckCircle className="text-indigo-500 text-2xl" />
                <p className="text-lg font-medium text-gray-700">
                  {mission.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Images Section */}
          <motion.div
            className="relative flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-full max-w-md">
              <img
                src="https://kashmirobserver.net/wp-content/uploads/2023/08/Education-AI-Artificial-Intelligence.jpg"
                alt="AI Education"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://www.eschoolnews.com/files/2020/09/digital-learning-tools.jpg"
                alt="Learning Tools"
                className="absolute top-1/4 left-1/4 transform -translate-x-1/2 w-2/3 rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
