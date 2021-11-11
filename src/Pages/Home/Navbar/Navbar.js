import React from 'react';

const Navbar = () => {
	const mobileMenuButton = () => {
		document.getElementById('mobile-menu').classList.toggle('hidden');
	};

	return (
		// <!-- Navbar goes here -->
		<nav className="nav-bg shadow-lg">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="/" className="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"> */}
								<span className="font-semibold text-gray-500 text-lg">Dorpon</span>
							</a>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
							<a
								href="/"
								className="py-4 px-2 text-gray-500  font-semibold  hover:text-green-500 transition duration-300"
							>
								Home
							</a>
							<a
								href="/"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>
								Services
							</a>
							<a
								href="/"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>
								About
							</a>
							<a
								href="/"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>
								Contact Us
							</a>
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
						<a
							href="/"
							className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
						>
							Log In
						</a>
						{/* <a
							href
							className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
						>
							Sign Up
						</a> */}
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
			<div id="mobile-menu" className="hidden ">
				<ul className="">
					<li className="active">
						<a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
							Home
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
						>
							Services
						</a>
					</li>
					<li>
						<a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
							About
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;