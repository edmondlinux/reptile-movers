
import { motion } from "framer-motion";
import { 
  Award, 
  Shield, 
  Clock, 
  DollarSign, 
  Globe, 
  Users, 
  Target,
  Truck,
  Package,
  MapPin,
  Heart,
  Thermometer,
  FileCheck,
  Plane
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "12+", label: "Asian Countries", icon: Globe },
    { number: "5K+", label: "Happy Breeders", icon: Users },
    { number: "99.9%", label: "Safe Arrivals", icon: Target }
  ];

  const values = [
    {
      title: "Animal Welfare",
      description: "Our top priority is the health and safety of every reptile during transportation.",
      icon: Heart
    },
    {
      title: "Expertise",
      description: "Specialized knowledge in reptile biology, behavior, and transportation requirements.",
      icon: Award
    },
    {
      title: "Compliance",
      description: "Full CITES documentation and legal compliance for international reptile trade.",
      icon: FileCheck
    },
    {
      title: "Innovation",
      description: "Advanced climate control and monitoring systems for optimal reptile comfort.",
      icon: Thermometer
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started as Europe's first specialized reptile courier service"
    },
    {
      year: "2012",
      title: "Asian Expansion",
      description: "Established shipping routes to China, Malaysia, and Korea"
    },
    {
      year: "2018",
      title: "Climate Technology",
      description: "Launched advanced temperature and humidity monitoring systems"
    },
    {
      year: "2023",
      title: "Global Network",
      description: "Extended to 12+ Asian countries with certified facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-emerald-400">Reptile Movers EU</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Europe's leading reptile transportation specialists, connecting 
              breeders with Asian markets through safe, legal shipping solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <stat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2008 by reptile enthusiasts and logistics professionals, 
                Reptile Movers EU emerged from a simple need: safe, reliable transportation 
                for precious reptiles between European breeders and Asian markets.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over 15 years, we've perfected our climate-controlled transportation 
                methods, built relationships with CITES authorities, and established 
                trusted networks across Europe and Asia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be the leading reptile courier service, 
                with thousands of successful shipments and healthy arrivals 
                across 12+ Asian countries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <Thermometer className="w-16 h-16 text-gray-500" />
              </div>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <Truck className="w-16 h-16 text-gray-500" />
              </div>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center col-span-2">
                <Plane className="w-16 h-16 text-gray-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our reptile transportation services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in building Europe's premier reptile shipping service
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="text-emerald-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Expertise</h2>
            <p className="text-xl text-gray-300">
              Recognized for excellence in reptile transportation and animal welfare
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <FileCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CITES Certified</h3>
              <p className="text-gray-400 text-sm">Wildlife Trade Documentation</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">IATA Certified</h3>
              <p className="text-gray-400 text-sm">Live Animal Regulations</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">EU Approved</h3>
              <p className="text-gray-400 text-sm">Animal Transport Certificate</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Best Reptile Courier</h3>
              <p className="text-gray-400 text-sm">European Reptile Association 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
