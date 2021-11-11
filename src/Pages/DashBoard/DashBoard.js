import React from 'react';
import { Link } from 'react-router-dom';
import glass from '../../img/icon/whiteGlass.png';
const DashBoard = () => {
	const handleOnClick = () => {
		document.getElementById('sidebar').classList.toggle('-translate-x-full');
	};
	return (
		<div>
			<div className="bg-gray-800 hidden md:block">
				<div className="container mx-auto">
					<h2 className="text-3xl text-center font-medium text-white py-3">Dash Board</h2>
				</div>
			</div>

			<div className="relative min-h-screen md:flex">
				{/* <!-- mobile menu bar --> */}
				<div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
					{/* <!-- logo --> */}
					<a href="/" className="block p-4 text-white font-bold">
						Dash Board
					</a>

					{/* <!-- mobile menu button --> */}
					<button
						id="mobile-menu-button"
						onClick={handleOnClick}
						className=" p-4 focus:outline-none focus:bg-gray-700"
					>
						<svg
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* <!-- sidebar --> */}
				<div
					id="sidebar"
					className=" bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
				>
					{/* <!-- logo --> */}
					<Link to="/" className="text-white flex items-center space-x-2 px-4">
						<img src={glass} className="w-12" alt="!" />
						<span className="text-2xl font-extrabold">Dorpon</span>
					</Link>

					{/* <!-- nav --> */}
					<nav>
						<Link
							to="/"
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							Pay
						</Link>
						<Link
							to="/"
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							My Order
						</Link>
						<Link
							to="/"
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							Review
						</Link>
						<Link
							to="/"
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							Logout
						</Link>
					</nav>
				</div>

				{/* <!-- content --> */}
				<div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
			</div>
		</div>
	);
};

export default DashBoard;
