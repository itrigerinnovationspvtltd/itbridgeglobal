import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaCode, FaMobile, FaCloud, FaShoppingCart } from 'react-icons/fa';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };
  }, [i18n]);

  const categories = useMemo(() => [
    { id: 'all', name: t('portfolio.categories.all') },
    { id: 'web', name: t('portfolio.categories.web') },
    { id: 'mobile', name: t('portfolio.categories.mobile') },
    { id: 'cloud', name: t('portfolio.categories.cloud') },
    { id: 'ecommerce', name: t('portfolio.categories.ecommerce') },
  ], [t, language]);

  const projects = useMemo(() => [
    {
      id: 1,
      title: t('portfolio.projects.ecommerce.title'),
      category: 'ecommerce',
      description: t('portfolio.projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      icon: FaShoppingCart,
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        '300% increase in online sales',
        '50% reduction in cart abandonment',
        '1M+ monthly active users',
      ],
      link: '#',
      color: 'from-primary-orange to-red-500'
    },
    {
      id: 2,
      title: t('portfolio.projects.mobileBanking.title'),
      category: 'mobile',
      description: t('portfolio.projects.mobileBanking.description'),
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      icon: FaMobile,
      technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL'],
      results: [
        '500K+ app downloads',
        '4.8/5 app store rating',
        '99.9% uptime achieved',
      ],
      link: '#',
      color: 'from-primary-teal to-blue-500'
    },
    {
      id: 3,
      title: t('portfolio.projects.healthcare.title'),
      category: 'web',
      description: t('portfolio.projects.healthcare.description'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      icon: FaCode,
      technologies: ['Next.js', 'Python', 'MySQL', 'Docker'],
      results: [
        '100+ hospitals onboarded',
        '40% reduction in wait times',
        'HIPAA compliant system',
      ],
      link: '#',
      color: 'from-primary-green to-teal-500'
    },
    {
      id: 4,
      title: t('portfolio.projects.cloudMigration.title'),
      category: 'cloud',
      description: t('portfolio.projects.cloudMigration.description'),
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      icon: FaCloud,
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
      results: [
        '60% cost reduction',
        '99.99% availability',
        'Zero downtime migration',
      ],
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: t('portfolio.projects.realEstate.title'),
      category: 'web',
      description: t('portfolio.projects.realEstate.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      icon: FaCode,
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
      results: [
        '10K+ property listings',
        '2M+ monthly visitors',
        '25% increase in conversions',
      ],
      link: '#',
      color: 'from-indigo-500 to-primary-teal'
    },
    {
      id: 6,
      title: t('portfolio.projects.fitness.title'),
      category: 'mobile',
      description: t('portfolio.projects.fitness.description'),
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      icon: FaMobile,
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Stripe'],
      results: [
        '1M+ active users',
        '4.9/5 user rating',
        '80% user retention rate',
      ],
      link: '#',
      color: 'from-pink-500 to-purple-500'
    },
  ], [t, language]);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" key={language}>
              {t('portfolio.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto" key={language}>
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    <a
                      href={project.link}
                      className="text-white text-5xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="text-white text-xl" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-teal font-semibold hover:gap-3 transition-all duration-300"
                  >
                    View Case Study
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              {t('portfolio.impact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.impact.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: t('portfolio.stats.projectsDelivered') },
              { number: '98%', label: t('portfolio.stats.clientSatisfaction') },
              { number: '200+', label: t('portfolio.stats.happyClients') },
              { number: '15+', label: t('portfolio.stats.yearsExperience') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <img
              src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=00B496&color=fff&size=100"
              alt="Client"
              className="w-20 h-20 rounded-full mx-auto mb-6"
              loading="lazy"
            />
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed italic">
              "{t('portfolio.testimonial.text')}"
            </p>
            <h4 className="font-bold text-xl">{t('portfolio.testimonial.author')}</h4>
            <p className="text-gray-600">{t('portfolio.testimonial.position')}</p>
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
              {t('portfolio.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('portfolio.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t('portfolio.cta.startProject')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

