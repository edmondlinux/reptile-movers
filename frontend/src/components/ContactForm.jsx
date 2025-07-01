import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const ContactForm = () => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));

			// Reset form on success
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: ""
			});
			setSubmitStatus('success');
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='bg-white rounded-lg shadow-lg p-8'>
			<h2 className='text-2xl font-bold text-gray-900 mb-6'>{t('contact.form.name')}</h2>

			{submitStatus === 'success' && (
				<div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
					{t('contact.form.success')}
				</div>
			)}

			{submitStatus === 'error' && (
				<div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
					{t('contact.form.error')}
				</div>
			)}

			<form onSubmit={handleSubmit} className='space-y-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							{t('contact.form.name')}
						</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder={t('contact.form.namePlaceholder')}
							required
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							{t('contact.form.email')}
						</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							placeholder={t('contact.form.emailPlaceholder')}
							required
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							{t('contact.form.phone')}
						</label>
						<input
							type='tel'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder={t('contact.form.phonePlaceholder')}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							{t('contact.form.subject')}
						</label>
						<input
							type='text'
							name='subject'
							value={formData.subject}
							onChange={handleChange}
							placeholder={t('contact.form.subjectPlaceholder')}
							required
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
						/>
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						{t('contact.form.message')}
					</label>
					<textarea
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder={t('contact.form.messagePlaceholder')}
						rows={6}
						required
						className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
					/>
				</div>

				<button
					type='submit'
					disabled={isSubmitting}
					className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
				>
					<Send className='w-5 h-5' />
					<span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
				</button>
			</form>
		</div>
	);
};

export default ContactForm;