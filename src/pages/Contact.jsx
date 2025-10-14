import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (123) 456-7890', '+1 (123) 456-7891'],
      color: 'from-primary-orange to-red-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@itbridgeglobal.com', 'support@itbridgeglobal.com'],
      color: 'from-primary-teal to-blue-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Tech Street, Silicon Valley', 'CA 94025, United States'],
      color: 'from-primary-green to-teal-500'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: '#', color: 'hover:bg-blue-600', name: 'Facebook' },
    { icon: FaTwitter, url: '#', color: 'hover:bg-sky-500', name: 'Twitter' },
    { icon: FaLinkedinIn, url: '#', color: 'hover:bg-blue-700', name: 'LinkedIn' },
    { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600', name: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-custom relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our IT solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <info.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send Us a <span className="text-primary">Message</span>
            </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395384749684!2d-122.08424908469237!3d37.38605397983283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Free consultation and project estimation',
                    'Expert advice from certified professionals',
                    'Custom solutions tailored to your needs',
                    'Transparent pricing with no hidden costs',
                    'Quick response time (within 24 hours)',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-primary-teal to-primary-orange rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6 opacity-90">
                  Follow us on social media for the latest updates, news, and insights.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="text-white text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We offer a comprehensive range of IT services including web development, mobile app development, cloud solutions, cybersecurity, IT consulting, and more. Check our Services page for a complete list.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and requirements. A simple website might take 4-6 weeks, while a complex enterprise solution could take 3-6 months. We provide detailed timelines during the consultation phase.',
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer: 'Yes! We offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. Our team is available 24/7 for critical issues.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Contact us for a free consultation and customized quote.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

