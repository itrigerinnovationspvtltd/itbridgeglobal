import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.portfolio'), path: '/portfolio' },
  ];

  const services = [
    t('home.services.abap.title'),
    t('home.services.functional.title'),
    t('home.services.architecture.title'),
    t('home.services.project.title'),
    t('home.services.migration.title'),
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
                {t('footer.company.name')}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.company.description')}
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
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
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
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.services')}</h3>
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
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:info@itbridgeglobal.com" className="text-gray-400 hover:text-primary transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

