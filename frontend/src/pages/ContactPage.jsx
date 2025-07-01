import { MapPin, Phone, Mail, Clock, Shield, FileText, Warehouse, Globe } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "../hooks/useTranslation";

const ContactPage = () => {
	const { t } = useTranslation();

	return (
		<div className='min-h-screen bg-gray-50 pt-20'>
			{/* Header Section */}
			<section className='bg-emerald-600 text-white py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>{t('contact.title')}</h1>
					<p className='text-xl mb-6'>{t('contact.subtitle')}</p>
					<p className='text-lg text-emerald-100 max-w-3xl mx-auto'>
						{t('contact.description')}
					</p>
				</div>
			</section>

			{/* Contact Content */}
			<section className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div className='space-y-8'>
							<div>
								<h2 className='text-3xl font-bold text-gray-900 mb-6'>{t('contact.info.title')}</h2>
								<div className='space-y-4'>
									<div className='flex items-start space-x-4'>
										<MapPin className='w-6 h-6 text-emerald-600 mt-1' />
										<div>
											<h3 className='font-semibold text-gray-900'>Address</h3>
											<p className='text-gray-600'>{t('contact.info.address')}</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<Phone className='w-6 h-6 text-emerald-600 mt-1' />
										<div>
											<h3 className='font-semibold text-gray-900'>Phone</h3>
											<p className='text-gray-600'>{t('contact.info.phone')}</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<Mail className='w-6 h-6 text-emerald-600 mt-1' />
										<div>
											<h3 className='font-semibold text-gray-900'>Email</h3>
											<p className='text-gray-600'>{t('contact.info.email')}</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<Clock className='w-6 h-6 text-emerald-600 mt-1' />
										<div>
											<h3 className='font-semibold text-gray-900'>Business Hours</h3>
											<p className='text-gray-600'>{t('contact.info.hours')}</p>
										</div>
									</div>
								</div>
							</div>

							{/* Our Specialties */}
							<div>
								<h3 className='text-2xl font-bold text-gray-900 mb-6'>{t('contact.specialties.title')}</h3>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<div className='flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm'>
										<Shield className='w-8 h-8 text-emerald-600' />
										<span className='text-gray-700'>{t('contact.specialties.climateControl')}</span>
									</div>
									<div className='flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm'>
										<FileText className='w-8 h-8 text-emerald-600' />
										<span className='text-gray-700'>{t('contact.specialties.documentation')}</span>
									</div>
									<div className='flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm'>
										<Warehouse className='w-8 h-8 text-emerald-600' />
										<span className='text-gray-700'>{t('contact.specialties.quarantine')}</span>
									</div>
									<div className='flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm'>
										<Globe className='w-8 h-8 text-emerald-600' />
										<span className='text-gray-700'>{t('contact.specialties.network')}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			{/* Map Section Placeholder */}
			<section className='py-16 bg-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-gray-300 rounded-lg h-64 flex items-center justify-center'>
						<div className='text-center'>
							<MapPin className='w-12 h-12 text-gray-500 mx-auto mb-2' />
							<p className='text-gray-600'>Interactive Map Coming Soon</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;