import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import santhoshImg from "../src/assets/santhosh-2.jpeg";
import raghulImg from "../src/assets/raghul.jpg";
import johnImg from "../src/assets/profile-pic (1).png";
import jeganImg from "../src/assets/jegannath.jpg";
import harshiniImg from "../src/assets/harshini.jpg";
import abinaImg from "../src/assets/abina-sri.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Santhosh I",
    role: "CEO & Founder",
    bio: "Visionary leader with a passion for innovation and excellence.",
    image: santhoshImg,
  },
  {
    id: 2,
    name: "Raghul Chandramouli",
    role: "Founding Engineer",
    bio: "Tech enthusiast driving the AI and tech strategies.",
    image: raghulImg,
  },
  {
    id: 3,
    name: "John Wesley L",
    role: "Full Stack Developer",
    bio: "Expert in product development and user experience.",
    image: johnImg,
  },
  {
    id: 4,
    name: "Jegannath S",
    role: "Solution Engineer",
    bio: "Creative thinker shaping the visual identity of the brand.",
    image: jeganImg,
  },
  {
    id: 5,
    name: "Abina Sri",
    role: "Software Engineer",
    bio: "Crafting efficient and scalable code for cutting-edge solutions.",
    image: abinaImg,
  },
  {
    id: 6,
    name: "Harshini",
    role: "Marketing Head",
    bio: "Building strategic campaigns that connect with our audience.",
    image: harshiniImg,
  },
];

const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-gray-100 via-blue-50 to-blue-100 py-20"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mt-4 text-gray-600"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.6 },
            },
          }}
        >
          A group of dedicated professionals committed to innovation and impact.
        </motion.p>

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all"
              variants={cardVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Circular Image */}
              <div className="flex justify-center mt-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-500 text-lg font-medium mt-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
