import { motion, useAnimation } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Student",
    testimonial:
      "This-AI revolutionized my learning experience! The AI-driven solutions helped me understand complex topics with ease, and the personalized courses were a game changer.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Teacher",
    testimonial:
      "I love how This-AI enhances my teaching methods. The tools for personalized learning allow me to address the unique needs of each student in real-time.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Administrator",
    testimonial:
      "As an administrator, I’ve seen how This-AI empowers both teachers and students. The collaborative tools and performance analytics make it easy to track progress and improve engagement.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 4,
    name: "Emily Clark",
    role: "Parent",
    testimonial:
      "As a parent, I’m thrilled to see my child engage with learning in such an innovative way. The personalized education and interactive tools have made a huge difference in their academic journey.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Educator",
    testimonial:
      "This-AI is a powerful tool for educators. It allows me to provide individualized learning experiences, track progress, and make learning more engaging and interactive for my students.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 6,
    name: "Sarah Evans",
    role: "Tech Enthusiast",
    testimonial:
      "The integration of AI in education is the future, and This-AI is leading the way. It’s incredible to see the potential of AI in transforming the way we learn and teach.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.2 }); // Detect if the section is in view
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 py-20"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-indigo-400 w-96 h-96 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 bg-gradient-to-l from-yellow-400 to-orange-400 w-80 h-80 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mt-4 text-gray-700"
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
            Hear from those who have experienced the transformative power of
            This-AI in education.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-xl p-6 space-y-4 relative"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 text-4xl" />
              <FaQuoteRight className="absolute bottom-4 right-4 text-gray-300 text-4xl" />
              <p className="text-lg font-medium text-gray-700 italic">{`"${testimonial.testimonial}"`}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-indigo-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
