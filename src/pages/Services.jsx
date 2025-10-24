import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { 
  FaCode, FaMobile, FaCloud, FaDatabase, FaShieldAlt, FaChartLine,
  FaCog, FaRobot, FaNetworkWired, FaLaptopCode, FaServer, FaGlobe,
  FaCheck, FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  
  const allServices = [
    {
      icon: FaCode,
      title: t('services.serviceCards.abap.title'),
      description: t('services.serviceCards.abap.description'),
      color: 'from-primary-orange to-red-500',
      features: t('services.serviceCards.abap.features', { returnObjects: true }),
      technologies: ['SAP ABAP', 'SAP HANA', 'BAPIs', 'IDocs', 'OData Services']
    },
    {
      icon: FaMobile,
      title: t('services.serviceCards.functional.title'),
      description: t('services.serviceCards.functional.description'),
      color: 'from-primary-teal to-blue-500',
      features: t('services.serviceCards.functional.features', { returnObjects: true }),
      technologies: ['SAP S/4HANA', 'SAP ECC', 'SAP Fiori', 'SAP Solution Manager', 'Business Process Management']
    },
    {
      icon: FaCloud,
      title: t('services.serviceCards.architecture.title'),
      description: t('services.serviceCards.architecture.description'),
      color: 'from-primary-green to-teal-500',
      features: t('services.serviceCards.architecture.features', { returnObjects: true }),
      technologies: ['SAP S/4HANA', 'SAP BTP', 'SAP CPI', 'Azure', 'AWS', 'Enterprise Architecture Tools']
    },
    {
      icon: FaDatabase,
      title: t('services.serviceCards.project.title'),
      description: t('services.serviceCards.project.description'),
      color: 'from-purple-500 to-pink-500',
      features: t('services.serviceCards.project.features', { returnObjects: true }),
      technologies: ['SAP Activate', 'JIRA', 'Microsoft Project', 'Confluence', 'Asana', 'Smartsheet']
    },
    {
      icon: FaShieldAlt,
      title: t('services.serviceCards.migration.title'),
      description: t('services.serviceCards.migration.description'),
      color: 'from-primary-red to-orange-500',
      features: t('services.serviceCards.migration.features', { returnObjects: true }),
      technologies: ['SAP S/4HANA', 'SAP BTP', 'SAP Migration Cockpit', 'Azure', 'AWS', 'Google Cloud']
    },
    // {
    //   icon: FaChartLine,
    //   title: 'IT Consulting',
    //   description: 'Strategic technology consulting to align IT initiatives with your business objectives.',
    //   color: 'from-indigo-500 to-primary-teal',
    //   features: [
    //     'Digital transformation',
    //     'Technology strategy',
    //     'Process optimization',
    //     'IT roadmap planning',
    //     'Change management'
    //   ],
    //   technologies: ['Agile', 'ITIL', 'Six Sigma', 'SAFe', 'Lean']
    // },
    // {
    //   icon: FaRobot,
    //   title: 'AI & Machine Learning',
    //   description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantage.',
    //   color: 'from-pink-500 to-purple-500',
    //   features: [
    //     'Machine learning models',
    //     'Natural language processing',
    //     'Computer vision',
    //     'Chatbots & virtual assistants',
    //     'Predictive analytics'
    //   ],
    //   technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Python']
    // },
    // {
    //   icon: FaNetworkWired,
    //   title: 'Network Infrastructure',
    //   description: 'Design, implementation, and management of robust network infrastructure solutions.',
    //   color: 'from-blue-500 to-cyan-500',
    //   features: [
    //     'Network design',
    //     'Infrastructure setup',
    //     'Network security',
    //     'Performance monitoring',
    //     'Network optimization'
    //   ],
    //   technologies: ['Cisco', 'Juniper', 'SD-WAN', 'VPN', 'Load Balancers']
    // },
    // {
    //   icon: FaLaptopCode,
    //   title: 'Software Development',
    //   description: 'Custom software solutions tailored to your unique business requirements and workflows.',
    //   color: 'from-green-500 to-emerald-500',
    //   features: [
    //     'Enterprise software',
    //     'Custom applications',
    //     'API development',
    //     'Software integration',
    //     'Legacy modernization'
    //   ],
    //   technologies: ['Java', '.NET', 'Python', 'Go', 'Microservices']
    // },
    // {
    //   icon: FaServer,
    //   title: 'Managed IT Services',
    //   description: '24/7 IT support and management to keep your systems running smoothly and securely.',
    //   color: 'from-orange-500 to-red-500',
    //   features: [
    //     '24/7 monitoring',
    //     'Help desk support',
    //     'System maintenance',
    //     'Backup & recovery',
    //     'Performance optimization'
    //   ],
    //   technologies: ['ITSM', 'Remote monitoring', 'Automation', 'Backup solutions']
    // },
    // {
    //   icon: FaGlobe,
    //   title: 'Digital Marketing',
    //   description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
    //   color: 'from-teal-500 to-blue-500',
    //   features: [
    //     'SEO optimization',
    //     'Social media marketing',
    //     'Content marketing',
    //     'PPC campaigns',
    //     'Email marketing'
    //   ],
    //   technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Google Ads']
    // },
    // {
    //   icon: FaCog,
    //   title: 'Process Automation',
    //   description: 'Streamline operations and reduce costs with intelligent process automation solutions.',
    //   color: 'from-primary-orange to-yellow-500',
    //   features: [
    //     'Robotic process automation',
    //     'Workflow automation',
    //     'Business process management',
    //     'Integration services',
    //     'Custom automation tools'
    //   ],
    //   technologies: ['UiPath', 'Automation Anywhere', 'Zapier', 'Power Automate']
    // },
  ];

  const process = [
    {
      step: '01',
      title: t('services.process.discovery.title'),
      description: t('services.process.discovery.description'),
    },
    {
      step: '02',
      title: t('services.process.planning.title'),
      description: t('services.process.planning.description'),
    },
    {
      step: '03',
      title: t('services.process.development.title'),
      description: t('services.process.development.description'),
    },
    {
      step: '04',
      title: t('services.process.testing.title'),
      description: t('services.process.testing.description'),
    },
    {
      step: '05',
      title: t('services.process.deployment.title'),
      description: t('services.process.deployment.description'),
    },
    {
      step: '06',
      title: t('services.process.support.title'),
      description: t('services.process.support.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
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
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto" key={language}>
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              {t('services.whatWeOffer')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.offerSubtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('services.keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck
                          className="text-primary-teal mt-1 mr-2 flex-shrink-0"
                          size={12}
                        />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('services.technologies')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-teal font-semibold hover:gap-3 transition-all duration-300"
                >
                  {t('services.getStarted')}
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to ensure project success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why Choose Our <span className="text-primary">Services?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Certified professionals with years of industry experience",
                  },
                  {
                    title: "Cutting-Edge Technology",
                    description:
                      "We use the latest tools and technologies for optimal results",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "500+ successful projects delivered on time and on budget",
                  },
                  {
                    title: "Dedicated Support",
                    description:
                      "24/7 support and maintenance to keep your systems running",
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Solutions that grow with your business needs",
                  },
                  {
                    title: "Cost-Effective",
                    description:
                      "Maximum value for your investment with transparent pricing",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white" size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Team working"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business
              goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
