import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PartnersSection = () => {
	const { t } = useTranslation();

	const partners = [
		{ name: "DHL Express", logo: "DHL" },
		{ name: "FedEx", logo: "FDX" },
		{ name: "UPS", logo: "UPS" },
		{ name: "TNT", logo: "TNT" },
		{ name: "Maersk", logo: "MSK" },
		{ name: "China Post", logo: "CPO" },
		{ name: "Korea Post", logo: "KPO" },
		{ name: "Pos Malaysia", logo: "POS" }
	];

	return (
		<section className='py-16 bg-gray-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						{t('partners.title')}
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						{t('partners.description')}
					</p>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center'>
					{partners.map((partner, index) => (
						<div key={index} className='flex items-center justify-center'>
							<div className='bg-white rounded-lg shadow-sm p-6 w-full h-20 flex items-center justify-center group hover:shadow-md transition-shadow duration-300'>
								<div className='text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 font-bold text-lg'>
									{partner.logo}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center mt-8'>
					<p className='text-gray-500 italic'>
						{t('partners.morePartners')}
					</p>
				</div>
			</div>
		</section>
	);
};

export default PartnersSection;