import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useMemo } from 'react';
import { 
  FaCode, FaMobile, FaCloud, FaDatabase, FaShieldAlt, FaChartLine,
  FaCog, FaRobot, FaNetworkWired, FaLaptopCode, FaServer, FaGlobe,
  FaCheck, FaArrowRight, FaBoxes, FaTasks, FaRocket
} from 'react-icons/fa';

const Services = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

   
  }, [i18n]);
  
  const allServices = useMemo(() => [
    {
      icon: FaCode,
      title: t('services.serviceCards.abap.title'),
      description: t('services.serviceCards.abap.description'),
      color: 'from-primary-orange to-red-500',
      features: t('services.serviceCards.abap.features', { returnObjects: true }),
      technologies: ['SAP ABAP', 'SAP HANA', 'BAPIs', 'IDocs', 'OData Services']
    },
    {
      icon: FaChartLine,
      title: t('services.serviceCards.fico.title'),
      description: t('services.serviceCards.fico.description'),
      color: 'from-primary-teal to-blue-500',
      features: t('services.serviceCards.fico.features', { returnObjects: true }),
      technologies: ['SAP FI', 'SAP CO', 'SAP S/4HANA', 'SAP Fiori', 'SAP Analytics']
    },
    {
      icon: FaBoxes,
      title: t('services.serviceCards.mmsdpp.title'),
      description: t('services.serviceCards.mmsdpp.description'),
      color: 'from-primary-green to-teal-500',
      features: t('services.serviceCards.mmsdpp.features', { returnObjects: true }),
      technologies: ['SAP MM', 'SAP SD', 'SAP PP', 'SAP S/4HANA', 'SAP Fiori']
    },
    {
      icon: FaNetworkWired,
      title: t('services.serviceCards.architecture.title'),
      description: t('services.serviceCards.architecture.description'),
      color: 'from-purple-500 to-pink-500',
      features: t('services.serviceCards.architecture.features', { returnObjects: true }),
      technologies: ['SAP S/4HANA', 'SAP BTP', 'SAP CPI', 'Azure', 'AWS', 'Enterprise Architecture Tools']
    },
    {
      icon: FaTasks,
      title: t('services.serviceCards.project.title'),
      description: t('services.serviceCards.project.description'),
      color: 'from-primary-red to-orange-500',
      features: t('services.serviceCards.project.features', { returnObjects: true }),
      technologies: ['SAP Activate', 'JIRA', 'Microsoft Project', 'Confluence', 'Asana', 'Smartsheet']
    },
    {
      icon: FaRocket,
      title: t('services.serviceCards.migration.title'),
      description: t('services.serviceCards.migration.description'),
      color: 'from-indigo-500 to-primary-teal',
      features: t('services.serviceCards.migration.features', { returnObjects: true }),
      technologies: ['SAP S/4HANA', 'SAP BTP', 'SAP Migration Cockpit', 'Azure', 'AWS', 'Google Cloud']
    },
  ], [t, i18n.language]);

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
      transition: {
        duration: 0.5,
      },
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" key={i18n.language}>
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto" key={i18n.language}>
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
                key={`${index}-${i18n.language}`}
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
                key={`${index}-${i18n.language}`}
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
                {t('services.whyChoose.title')}
              </h2>
              <div className="space-y-6">
                {t('services.whyChoose.benefits', { returnObjects: true }).map((benefit, index) => (
                  <motion.div
                    key={`${index}-${i18n.language}`}
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
