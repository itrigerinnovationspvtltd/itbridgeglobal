import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaMobile, FaCloud, FaTasks, FaShieldAlt, FaChartLine,
  FaStar, FaQuoteLeft, FaCheck, FaRocket, FaPlay,FaBoxes,FaNetworkWired
} from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: FaCode,
      title: 'ABAP Development',
      description: 'Extensions, interfaces, reports, enhancements and code optimization for ECC & S/4HANA.',
      color: 'from-primary-orange to-red-500'
    },
    {
      icon: FaChartLine,
      title: 'FI/CO Council',
  description: 'Financials and Controlling governance, best practices, and integration guidance for SAP solutions.',
 color: 'from-primary-teal to-blue-500'
    },
    {
      icon: FaBoxes,
  title: 'MM/SD/PP Council',
  description: 'Expert collaboration on Materials Management, Sales & Distribution, and Production Planning for streamlined SAP operations.',
   color: 'from-primary-green to-teal-500'
    },
    {
      icon: FaNetworkWired,
  title: 'SAP Architecture',
  description: 'Designing scalable, secure, and high-performing SAP landscapes ensuring seamless system integration and modernization.',
  color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaTasks,
  title: 'Project Management',
  description: 'Ensuring successful SAP project delivery through planning, execution, risk control, and stakeholder alignment.',
  color: 'from-primary-red to-orange-500'
    },
    {
      icon: FaRocket,
  title: 'S/4HANA Migration',
  description: 'Planning and executing seamless migration to S/4HANA, including data transition, system conversion, and process optimization.',
  color: 'from-primary-red to-orange-500'
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, TechCorp',
      image: 'https://ui-avatars.com/api/?name=John+Smith&background=00B496&color=fff',
      rating: 5,
      text: 'IT Bridge Global transformed our business with their innovative solutions. Their team is professional, responsive, and delivers exceptional results.',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO, InnovateLabs',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=FF8C42&color=fff',
      rating: 5,
      text: 'Outstanding service and technical expertise. They delivered our project on time and exceeded our expectations in every way.',
    },
    {
      name: 'Michael Chen',
      position: 'Founder, StartupHub',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=7CB342&color=fff',
      rating: 5,
      text: 'Working with IT Bridge Global was a game-changer for our startup. Their solutions are scalable, reliable, and cost-effective.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
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
      {/* Hero Section - Ultra Modern & Attractive */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-primary/30 rounded-lg"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full"
          />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 inline-block"
              >
                <span className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full text-sm font-semibold shadow-lg shadow-primary/30 flex items-center gap-2 w-fit">
                  <FaRocket className="animate-pulse" />
                  Leading IT Solutions Provider
                </span>
              </motion.div>

              {/* Main Heading with Gradient */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Transform Your
                <span className="block mt-2 bg-gradient-to-r from-primary via-primary/90 to-purple-600 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We craft innovative IT solutions that empower businesses to thrive in the digital age. From web development to cloud infrastructure, we turn your vision into reality.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="group px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 flex items-center gap-2"
                  >
                    Get Started Free
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors">
                      <FaPlay className="text-primary group-hover:text-white text-sm" />
                    </div>
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>

              {/* Animated Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    alt="Modern Technology"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                      <FaRocket className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -right-4 w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center"
                >
                  <FaCloud className="text-3xl text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-32 -right-4 w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center"
                >
                  <FaCode className="text-3xl text-purple-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section - Using ONLY Primary Color */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section - Using ONLY Primary Color */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-primary">IT Bridge Global?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in the IT industry, we've helped hundreds of businesses transform their digital presence and achieve their goals.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Experienced team of certified professionals',
                  'Cutting-edge technology solutions',
                  'Proven track record of success',
                  'Dedicated support and maintenance',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - White Background, Using ONLY Primary Color */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <FaQuoteLeft className="text-4xl text-primary mb-4 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Using ONLY Primary Color */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our IT solutions can help you achieve your business goals and drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-primary font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              
              <Link
                to="/services"
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

