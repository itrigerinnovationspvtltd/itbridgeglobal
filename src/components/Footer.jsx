import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'IT Consulting',
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: '#', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, url: '#', color: 'hover:bg-sky-500' },
    { icon: FaLinkedinIn, url: '#', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="IT Bridge Global Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-white">
                Bridge Global
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering innovative IT solutions to empower businesses worldwide. Your trusted technology partner.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:info@itbridgeglobal.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@itbridgeglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} IT Bridge Global. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

