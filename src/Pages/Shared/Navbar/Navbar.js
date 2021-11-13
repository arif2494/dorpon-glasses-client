import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const mobileMenuButton = () => {
		document.getElementById('mobile-menu').classList.toggle('hidden');
	};

	return (
		// <!-- Navbar goes here -->
		<nav className="nav-bg shadow-lg ">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<Link to="/" className="flex items-center py-4 px-2">
								
								<span className="font-semibold text-gray-500 text-lg">Dorpon</span>
							</Link>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
							<Link
								to="/"
								className="py-4 px-2 text-gray-500  font-semibold  hover:text-green-500 transition duration-300"
							>
								Home
							</Link>
							<Link
								to="/exploreProducts"
								className="py-4 px-2 text-gray-500  font-semibold  hover:text-green-500 transition duration-300"
							>
								Explore
							</Link>
	
							{user?.displayName && <Link
								to="/dashboard"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>
								Dashboard
							</Link>}
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
						{
							user?.displayName && <button
								className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
							>
								{user.displayName}
							</button>
						}
						{user?.displayName ? (
							<button
								onClick={logOut}
								className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
							>
								Sign out
							</button>
						) : (
							<Link
								to="/login"
								className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
							>
								Log In
							</Link>
						)}

				
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button onClick={mobileMenuButton} className="outline-none ">
							<svg
								className=" w-6 h-6 text-gray-500 hover:text-green-500 "
								x-show="!showMenu"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div id="mobile-menu" className="hidden md:hidden bg-green-100">
				<ul className="">
					<li className="active">
						<Link to='/' className="block text-sm px-2 py-4  hover:bg-green-500 font-semibold transition duration-300">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/dashboard"
							className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold"
						>
							Dashboard
						</Link>
					</li>
					{user?.displayName && <li>
						<p  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold">
							{user?.displayName}
						</p>
					</li>}
					<li>
						<button
							onClick={logOut}
							className="block w-full text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold"
						>
							Logout
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
