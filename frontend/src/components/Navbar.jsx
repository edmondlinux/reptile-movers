import { Package, UserPlus, LogIn, LogOut, Lock, Truck, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const { t } = useTranslation();
	const isAdmin = user?.role === "admin";
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<Link to='/' className='text-xl sm:text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
						<Truck className='w-6 h-6 sm:w-8 sm:h-8' />
						<span>Reptile Movers EU</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center gap-4'>
						<Link
							to={"/"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.home')}
						</Link>
						<Link
							to={"/about"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.about')}
						</Link>
						<Link
							to={"/team"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.team')}
						</Link>
						<Link
							to={"/testimonials"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.testimonials')}
						</Link>
						<Link
							to={"/contact"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.contact')}
						</Link>
						<Link
							to={"/track"}
							className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'
						>
							{t('nav.track')}
						</Link>
						{user && (
							<Link
								to={"/shipments"}
								className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center'
							>
								<Package className='inline-block mr-1 group-hover:text-emerald-400' size={18} />
								<span>{t('nav.myShipments')}</span>
							</Link>
						)}
						{isAdmin && (
							<Link
								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-2 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
								to={"/admin-dashboard"}
							>
								<Lock className='inline-block mr-1' size={16} />
								<span>{t('nav.dashboard')}</span>
							</Link>
						)}

						<LanguageSwitcher />

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={16} />
								<span className='ml-2'>{t('nav.logOut')}</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={16} />
									{t('nav.signUp')}
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={16} />
									{t('nav.login')}
								</Link>
							</>
						)}
					</nav>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-gray-300 hover:text-emerald-400 transition duration-300'
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<nav className='md:hidden mt-4 pb-4 border-t border-gray-700'>
						<div className='flex flex-col space-y-3 pt-4'>
							<Link
								to={"/"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.home')}
							</Link>
							<Link
								to={"/about"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.about')}
							</Link>
							<Link
								to={"/team"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.team')}
							</Link>
							<Link
								to={"/testimonials"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.testimonials')}
							</Link>
							<Link
								to={"/contact"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.contact')}
							</Link>
							<Link
								to={"/track"}
								className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out py-2'
								onClick={closeMenu}
							>
								{t('nav.track')}
							</Link>
							{user && (
								<Link
									to={"/shipments"}
									className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out flex items-center py-2'
									onClick={closeMenu}
								>
									<Package className='mr-2' size={18} />
									{t('nav.myShipments')}
								</Link>
							)}
							{isAdmin && (
								<Link
									className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-2 rounded-md font-medium transition duration-300 ease-in-out flex items-center w-fit'
									to={"/admin-dashboard"}
									onClick={closeMenu}
								>
									<Lock className='mr-2' size={16} />
									{t('nav.dashboard')}
								</Link>
							)}

							<div className='py-2'>
								<LanguageSwitcher />
							</div>

							<div className='pt-2 border-t border-gray-700'>
								{user ? (
									<button
										className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out w-fit'
										onClick={() => {
											logout();
											closeMenu();
										}}
									>
										<LogOut size={16} />
										<span className='ml-2'>{t('nav.logOut')}</span>
									</button>
								) : (
									<div className='flex flex-col space-y-3'>
										<Link
											to={"/signup"}
											className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out w-fit'
											onClick={closeMenu}
										>
											<UserPlus className='mr-2' size={16} />
											{t('nav.signUp')}
										</Link>
										<Link
											to={"/login"}
											className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out w-fit'
											onClick={closeMenu}
										>
											<LogIn className='mr-2' size={16} />
											{t('nav.login')}
										</Link>
									</div>
								)}
							</div>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navbar;