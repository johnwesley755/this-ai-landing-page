import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full filter blur-xl opacity-40"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-72 h-72 bg-yellow-300 rounded-full filter blur-2xl opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, -30, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/2 w-24 h-24 bg-purple-200 rounded-full filter blur-lg opacity-25"
        animate={{ scale: [1, 1.3, 1], x: [-10, 10, -10] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Empowering Education with AI
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At This-AI, we aim to reshape education by leveraging the power of
            artificial intelligence. Our mission is to provide accessible,
            adaptive, and innovative learning tools that cater to diverse needs
            globally.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-gray-600">
              From personalized learning experiences to AI-driven analytics, we
              are dedicated to creating platforms that inspire curiosity, foster
              growth, and unlock potential.
            </p>
            <p className="text-gray-600">
              Join us in our journey to make education smarter, more engaging,
              and universally accessible.
            </p>
          </motion.div>
          <motion.button
            className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileTap={{ scale: 0.9, y: 5 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.img
              src="https://www.ictesolutions.com.au/media/1953/vision.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132396685480000000"
              alt="Vision Illustration"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-xl transform group-hover:scale-105 transition duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-400 to-transparent rounded-lg opacity-0 group-hover:opacity-60 transition duration-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
