import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaEye, FaHeart, FaAward, FaCertificate, FaTrophy,
  FaUsers, FaLightbulb, FaHandshake
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
      color: 'from-primary-orange to-red-500'
    },
    {
      icon: FaHeart,
      title: 'Quality',
      description: 'Excellence is not an act but a habit. We ensure the highest quality in everything we deliver.',
      color: 'from-primary-teal to-blue-500'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      color: 'from-primary-green to-teal-500'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients as partners.',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const achievements = [
    {
      icon: FaAward,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management certification',
    },
    {
      icon: FaCertificate,
      title: 'Microsoft Gold Partner',
      description: 'Premier cloud solutions provider',
    },
    {
      icon: FaTrophy,
      title: 'Best IT Services 2024',
      description: 'Industry recognition award',
    },
  ];

  const team = [
    {
      name: 'David Miller',
      position: 'CEO & Founder',
      image: 'https://ui-avatars.com/api/?name=David+Miller&background=00B496&color=fff&size=200',
      bio: '20+ years in IT industry',
    },
    {
      name: 'Emily Rodriguez',
      position: 'CTO',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=FF8C42&color=fff&size=200',
      bio: 'Expert in cloud architecture',
    },
    {
      name: 'James Wilson',
      position: 'Head of Development',
      image: 'https://ui-avatars.com/api/?name=James+Wilson&background=7CB342&color=fff&size=200',
      bio: 'Full-stack development specialist',
    },
    {
      name: 'Lisa Anderson',
      position: 'Project Manager',
      image: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=DC143C&color=fff&size=200',
      bio: 'Agile & Scrum certified',
    },
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Empowering businesses through innovative technology solutions since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, IT Bridge Global started with a simple mission: to bridge the gap between complex technology and business success. What began as a small team of passionate developers has grown into a leading IT services company serving clients worldwide.
                </p>
                <p>
                  Over the years, we've evolved with the rapidly changing technology landscape, continuously expanding our expertise and service offerings. Today, we're proud to be a trusted partner for businesses of all sizes, from startups to Fortune 500 companies.
                </p>
                <p>
                  Our success is built on a foundation of technical excellence, customer satisfaction, and a commitment to innovation. We don't just deliver solutions; we build lasting partnerships that drive business growth and digital transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our journey"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary rounded-2xl p-10 text-white"
            >
              <FaRocket className="text-5xl mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To empower businesses with innovative, reliable, and scalable IT solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary rounded-2xl p-10 text-white"
            >
              <FaEye className="text-5xl mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-90">
                To be the world's most trusted technology partner, recognized for excellence, innovation, and transformative impact on businesses globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Awards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition of our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <achievement.icon className="text-6xl text-primary-teal mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-orange to-primary-teal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

