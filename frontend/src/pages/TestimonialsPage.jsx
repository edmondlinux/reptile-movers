
import { motion } from "framer-motion";
import { Star, Quote, Building, Calendar, CheckCircle } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: "Marco Rossi",
      company: "European Reptile Breeders",
      position: "Head Breeder",
      quote: "Reptile Movers EU has completely transformed our international shipping operations. Their climate-controlled transport and real-time monitoring have helped us achieve 99.9% healthy arrival rates to Asian markets. The team's expertise in reptile physiology and stress-free handling makes them irreplaceable.",
      rating: 5,
      industry: "Reptile Breeding",
      shipmentVolume: "200+ monthly",
      partnership: "4 years",
      results: ["99.9% healthy arrivals", "Zero CITES violations", "30% faster customs clearance"]
    },
    {
      name: "Lisa Wang",
      company: "Asia Exotic Imports",
      position: "Import Director",
      quote: "Working with Reptile Movers EU for our European reptile imports has been exceptional. Their CITES expertise and temperature-controlled logistics have enabled us to expand our European supplier network to 25+ breeders. Outstanding service with perfect documentation every time.",
      rating: 5,
      industry: "Exotic Import",
      shipmentVolume: "150+ monthly",
      partnership: "3 years",
      results: ["25+ European suppliers", "100% documentation accuracy", "40% growth in European imports"]
    },
    {
      name: "Johan Andersson",
      company: "Nordic Reptiles",
      position: "Operations Manager",
      quote: "The precision handling of our sensitive gecko shipments to Malaysia and Korea is remarkable. Reptile Movers EU understands that each species has unique requirements, and their specialized transport containers maintain perfect conditions throughout the journey.",
      rating: 5,
      industry: "Specialized Breeding",
      shipmentVolume: "100+ monthly",
      partnership: "2 years",
      results: ["100% gecko survival rate", "15% faster delivery times", "Zero temperature fluctuations"]
    }
  ];

  const allTestimonials = [
    {
      name: "Sophie Dubois",
      company: "French Gecko Farm",
      quote: "Excellent service to Korea and other Asian markets. Full CITES support and healthy arrivals every time. Their climate control systems are the best in the industry.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Chen Wei",
      company: "Shanghai Reptile Center",
      quote: "Reliable European imports with perfect temperature control. Reptile Movers EU makes international reptile trade seamless and stress-free for our animals.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Heinrich Weber",
      company: "German Ball Python Breeders",
      quote: "Professional handling of our ball python shipments to China. Their specialized containers and monitoring systems ensure every snake arrives in perfect condition.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Takeshi Yamamoto",
      company: "Tokyo Exotic Pets",
      quote: "Fast and safe delivery from Europe to Japan. Reptile Movers EU understands Japanese import requirements and handles all documentation flawlessly.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Anna Kowalski",
      company: "Polish Chameleon Farm",
      quote: "Temperature-controlled transport at its finest. Our chameleons arrive stress-free and healthy thanks to their specialized climate chambers.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "David Park",
      company: "Korean Reptile Distributors",
      quote: "Reliable European reptile imports with perfect health certificates. Their veterinary partnerships ensure all animals meet our strict health standards.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Isabella Santos",
      company: "Iberian Reptiles",
      quote: "Specialized handling for venomous species shipments to Asian research facilities. Reptile Movers EU has the expertise and permits for the most challenging transports.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Liu Ming",
      company: "Beijing Reptile Research",
      quote: "Scientific specimen transport requires precision. Their research animal protocols and university partnerships make them our preferred European courier.",
      rating: 5,
      companyLogo: true
    },
    {
      name: "Erik Nilsson",
      company: "Scandinavian Serpents",
      quote: "Cross-border reptile transport within Europe and to Asia. Excellent knowledge of EU regulations and Asian import requirements.",
      rating: 5,
      companyLogo: true
    }
  ];

  const stats = [
    { number: "15,000+", label: "Reptiles Safely Transported", icon: "🦎" },
    { number: "99.9%", label: "Healthy Arrival Rate", icon: "💚" },
    { number: "12+", label: "Asian Countries Served", icon: "🌏" },
    { number: "48hr", label: "Average Delivery Time", icon: "⏰" }
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
              Client <span className="text-emerald-400">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover why European breeders and Asian importers trust Reptile Movers EU 
              for safe, reliable reptile transportation across continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth case studies showcasing real results from our valued reptile breeding and importing partners
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-6">
                      <Quote className="w-12 h-12 text-emerald-600 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                            <span className="text-white font-semibold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-emerald-600 font-medium">{testimonial.position}</p>
                            <p className="text-gray-600">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h6 className="font-semibold text-gray-900 mb-3">Key Results:</h6>
                      <div className="space-y-2">
                        {testimonial.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Partnership Details</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Industry:</span>
                        <span className="font-medium">{testimonial.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Volume:</span>
                        <span className="font-medium">{testimonial.shipmentVolume}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Partnership:</span>
                        <span className="font-medium">{testimonial.partnership}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real feedback from European breeders and Asian importers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  companyLogo={testimonial.companyLogo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-xl mb-8">
              Ready to experience safe, reliable reptile transport from Europe to Asia? 
              Let us help you expand your breeding or import business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                Get Shipping Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
