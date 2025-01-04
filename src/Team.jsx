import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with a passion for innovation and excellence.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    bio: "Tech enthusiast driving the AI and tech strategies.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Product Manager",
    bio: "Expert in product development and user experience.",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Lead Designer",
    bio: "Creative thinker shaping the visual identity of the brand.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 5,
    name: "Chris Brown",
    role: "Marketing Head",
    bio: "Building strategic campaigns that connect with our audience.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    role: "Software Engineer",
    bio: "Crafting efficient and scalable code for cutting-edge solutions.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
];

const Team = () => (
  <div className="bg-gradient-to-b from-gray-100 via-blue-50 to-blue-100 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
        Meet Our Team
      </h2>
      <p className="text-lg md:text-xl mt-4 text-gray-600">
        A group of dedicated professionals committed to innovation and impact.
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all"
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
      </div>
    </div>
  </div>
);

export default Team;
