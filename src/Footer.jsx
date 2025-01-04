import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logoImg from "../src/assets/footer.svg";
const Footer = () => (
  <footer className="bg-gradient-to-br from-black to-blue-900 text-white py-10" id='contact'>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        <div>
          <img src={logoImg} alt="Logo" className="w-32 mb-4" />
          <p className="text-gray-300 text-sm">
            Empowering education through cutting-edge AI-driven solutions.
            Delivering impactful experiences for learners worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-blue-300 transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-300 transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-blue-300 transition-all duration-300"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} This-AI. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
