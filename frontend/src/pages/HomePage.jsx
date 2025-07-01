
import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";
import { 
	Package, 
	Truck, 
	Warehouse, 
	Globe, 
	Shield, 
	Clock, 
	MapPin,
	Zap,
	DollarSign,
	PhoneCall,
	CheckCircle,
	ArrowRight,
	Users,
	Award,
	Target
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import ProcessStep from "../components/ProcessStep";
import ContactForm from "../components/ContactForm";
import PartnersSection from "../components/PartnersSection";
import Gallery from "../components/Gallery";

const HomePage = () => {
	const { user } = useUserStore();

	const services = [
		{
			icon: Truck,
			title: "Climate-Controlled Transport",
			description: "Temperature and humidity controlled vehicles ensuring optimal conditions for reptile transportation across Europe."
		},
		{
			icon: Globe,
			title: "Europe to Asia Shipping",
			description: "Specialized international shipping to China, Malaysia, Korea, and other Asian countries with full documentation."
		},
		{
			icon: Warehouse,
			title: "Quarantine Facilities",
			description: "Certified quarantine and holding facilities meeting international standards for reptile health and safety."
		},
		{
			icon: Package,
			title: "Door-to-Door Service",
			description: "Complete pickup and delivery service from breeder to destination with expert reptile handling."
		},
		{
			icon: Target,
			title: "Breeder Network",
			description: "Connecting European reptile breeders with international markets through our trusted network."
		},
		{
			icon: CheckCircle,
			title: "CITES Documentation",
			description: "Full CITES permit handling and wildlife documentation for legal international reptile trade."
		}
	];

	const features = [
		{
			icon: Zap,
			title: "Express Reptile Delivery",
			description: "Priority shipping with minimal transit times for reptile welfare"
		},
		{
			icon: MapPin,
			title: "Live Animal Tracking",
			description: "Real-time monitoring of temperature, humidity, and location"
		},
		{
			icon: Shield,
			title: "Reptile Insurance",
			description: "Comprehensive coverage and expert reptile handling protocols"
		},
		{
			icon: Globe,
			title: "Europe-Asia Network",
			description: "Specialized routes covering Europe and major Asian markets"
		}
	];

	const testimonials = [
		{
			name: "Marco Rossi",
			company: "European Reptile Breeders",
			quote: "Reptile Movers EU has revolutionized how we ship to Asia. Every animal arrives healthy and stress-free. Truly professional service.",
			rating: 5,
			companyLogo: true
		},
		{
			name: "Lisa Wang",
			company: "Asia Exotic Imports",
			quote: "Reliable shipping from Europe to China with perfect documentation. Their climate control systems are top-notch.",
			rating: 5,
			companyLogo: true
		},
		{
			name: "Johan Andersson",
			company: "Nordic Reptiles",
			quote: "Professional handling and fast delivery to Malaysia. Reptile Movers EU understands the needs of live animal transport.",
			rating: 5,
			companyLogo: true
		},
		{
			name: "Sophie Dubois",
			company: "French Gecko Farm",
			quote: "Excellent service to Korea and other Asian markets. Full CITES support and healthy arrivals every time.",
			rating: 5,
			companyLogo: true
		}
	];

	const processSteps = [
		{
			number: 1,
			icon: PhoneCall,
			title: "Consultation",
			description: "Contact us for reptile shipping consultation and CITES requirements"
		},
		{
			number: 2,
			icon: Package,
			title: "Secure Pickup",
			description: "Expert collection with proper containers and climate preparation"
		},
		{
			number: 3,
			icon: Truck,
			title: "Climate Transport",
			description: "Temperature-controlled transport through our European-Asian network"
		},
		{
			number: 4,
			icon: CheckCircle,
			title: "Safe Delivery",
			description: "Healthy arrival with full documentation and health certificates"
		}
	];

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<HeroSection />

			{/* Partners Section */}
			<PartnersSection />

			{/* Gallery Section */}
			<Gallery />

			{/* Services Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Services</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Comprehensive logistics solutions tailored to meet your business needs
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => (
							<ServiceCard
								key={index}
								icon={service.icon}
								title={service.title}
								description={service.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Why Choose Us</h2>
						<p className='text-xl text-gray-600'>
							Experience the difference with our industry-leading capabilities
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, index) => (
							<FeatureCard
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-20 bg-emerald-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>How It Works</h2>
						<p className='text-xl text-gray-600'>
							Simple steps to get your shipment moving
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{processSteps.map((step, index) => (
							<ProcessStep
								key={index}
								number={step.number}
								icon={step.icon}
								title={step.title}
								description={step.description}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>What Our Clients Say</h2>
						<p className='text-xl text-gray-600'>
							Trusted by businesses worldwide
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{testimonials.map((testimonial, index) => (
							<TestimonialCard
								key={index}
								name={testimonial.name}
								company={testimonial.company}
								quote={testimonial.quote}
								rating={testimonial.rating}
								companyLogo={testimonial.companyLogo}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Visual Showcase Section */}
			<section className='py-20 bg-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Reptile Operations</h2>
						<p className='text-xl text-gray-600'>
							Specialized facilities and expert handling for live reptile transport
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{/* Image Placeholders */}
						<div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
							<div className='text-center'>
								<Users className='w-12 h-12 text-gray-500 mx-auto mb-2' />
								<p className='text-gray-600'>Expert Reptile Handlers</p>
							</div>
						</div>
						<div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
							<div className='text-center'>
								<Truck className='w-12 h-12 text-gray-500 mx-auto mb-2' />
								<p className='text-gray-600'>Climate-Controlled Vehicles</p>
							</div>
						</div>
						<div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
							<div className='text-center'>
								<Warehouse className='w-12 h-12 text-gray-500 mx-auto mb-2' />
								<p className='text-gray-600'>Quarantine Facilities</p>
							</div>
						</div>
						<div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
							<div className='text-center'>
								<Globe className='w-12 h-12 text-gray-500 mx-auto mb-2' />
								<p className='text-gray-600'>Asian Distribution Network</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<section className='py-20 bg-gray-900 text-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>About Reptile Movers EU</h2>
							<p className='text-xl text-gray-300 mb-6 leading-relaxed'>
								With over 15 years of specialized experience in reptile transportation, we've become Europe's leading 
								expert in safe, legal reptile shipping to Asia. Our network connects European breeders with markets 
								in China, Malaysia, Korea, and throughout Asia.
							</p>
							<p className='text-lg text-gray-400 mb-8'>
								We're certified by CITES authorities and maintain the highest standards for live animal welfare and international compliance.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								<div className='text-center'>
									<div className='text-3xl font-bold text-emerald-400 mb-2'>5+</div>
									<div className='text-gray-400'>Years Experience</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-bold text-emerald-400 mb-2'>9+</div>
									<div className='text-gray-400'>Asian Countries</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-bold text-emerald-400 mb-2'>10K+</div>
									<div className='text-gray-400'>Reptiles Shipped</div>
								</div>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='bg-gray-800 rounded-lg p-6 text-center'>
								<Award className='w-12 h-12 text-emerald-400 mx-auto mb-4' />
								<h3 className='font-semibold mb-2'>CITES Certified</h3>
								<p className='text-gray-400 text-sm'>Official wildlife trade permits</p>
							</div>
							<div className='bg-gray-800 rounded-lg p-6 text-center'>
								<Shield className='w-12 h-12 text-emerald-400 mx-auto mb-4' />
								<h3 className='font-semibold mb-2'>Climate Controlled</h3>
								<p className='text-gray-400 text-sm'>Optimal temperature & humidity</p>
							</div>
							<div className='bg-gray-800 rounded-lg p-6 text-center'>
								<Clock className='w-12 h-12 text-emerald-400 mx-auto mb-4' />
								<h3 className='font-semibold mb-2'>24/7 Monitoring</h3>
								<p className='text-gray-400 text-sm'>Live animal tracking & care</p>
							</div>
							<div className='bg-gray-800 rounded-lg p-6 text-center'>
								<DollarSign className='w-12 h-12 text-emerald-400 mx-auto mb-4' />
								<h3 className='font-semibold mb-2'>Competitive Rates</h3>
								<p className='text-gray-400 text-sm'>Best prices for reptile shipping</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<ContactForm />

			{/* CTA Section */}
			<section className='py-16 bg-emerald-600 text-white'>
				<div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Ship Your Reptiles?</h2>
					<p className='text-xl mb-8'>
						Connect with Asian markets through Europe's premier reptile transportation specialists.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 flex items-center justify-center group'>
							Get Shipping Quote
							<ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
						</button>
						<button className='border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300'>
							email: support@reptilemovers.site
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
