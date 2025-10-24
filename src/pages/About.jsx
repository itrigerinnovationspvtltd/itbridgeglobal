import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FaRocket, FaEye, FaHeart, FaAward, FaCertificate, FaTrophy,
  FaUsers, FaLightbulb, FaHandshake
} from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: FaLightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'from-primary-orange to-red-500'
    },
    {
      icon: FaHeart,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
      color: 'from-primary-teal to-blue-500'
    },
    {
      icon: FaHandshake,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
      color: 'from-primary-green to-teal-500'
    },
    {
      icon: FaUsers,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const achievements = [
    {
      icon: FaAward,
      title: t('about.achievements.iso.title'),
      description: t('about.achievements.iso.description'),
    },
    {
      icon: FaCertificate,
      title: t('about.achievements.microsoft.title'),
      description: t('about.achievements.microsoft.description'),
    },
    {
      icon: FaTrophy,
      title: t('about.achievements.award.title'),
      description: t('about.achievements.award.description'),
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
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              {t('about.subtitle')}
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
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {t('about.story.content', { returnObjects: true }).map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
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
              <h2 className="text-3xl font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-lg leading-relaxed opacity-90">
                {t('about.mission.content')}
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
              <h2 className="text-3xl font-bold mb-4">{t('about.vision.title')}</h2>
              <p className="text-lg leading-relaxed opacity-90">
                {t('about.vision.content')}
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
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t('about.cta.getInTouch')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

