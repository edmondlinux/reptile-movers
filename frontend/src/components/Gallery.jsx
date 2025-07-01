import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Gallery = () => {
	const { t } = useTranslation();

	const galleryItems = [
		{
			title: t('gallery.climateVehicles'),
			description: "Temperature and humidity controlled transport vehicles",
			category: "Transport"
		},
		{
			title: t('gallery.quarantineFacilities'),
			description: "State-of-the-art quarantine and holding facilities",
			category: "Facilities"
		},
		{
			title: t('gallery.expertHandling'),
			description: "Professional reptile handlers and veterinary care",
			category: "Care"
		},
		{
			title: t('gallery.asianNetwork'),
			description: "Distribution centers across major Asian markets",
			category: "Network"
		},
		{
			title: t('gallery.breedingPartners'),
			description: "Trusted European breeding partners",
			category: "Partners"
		},
		{
			title: t('gallery.documentation'),
			description: "Complete CITES and health documentation",
			category: "Documentation"
		}
	];

	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						{t('gallery.title')}
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						{t('gallery.description')}
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{galleryItems.map((item, index) => (
						<div key={index} className='group relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3]'>
							{/* Placeholder for actual images */}
							<div className='w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center'>
								<div className='text-white text-center p-6'>
									<h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
									<p className='text-sm opacity-90'>{item.description}</p>
									<span className='inline-block mt-3 px-3 py-1 bg-white/20 rounded-full text-xs'>
										{item.category}
									</span>
								</div>
							</div>

							{/* Hover overlay */}
							<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'>
								<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									<div className='bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center max-w-xs'>
										<h4 className='font-semibold text-gray-900 mb-1'>{item.title}</h4>
										<p className='text-sm text-gray-600'>{item.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;