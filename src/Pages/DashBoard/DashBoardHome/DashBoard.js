import React from 'react';
import glass from '../../../img/icon/whiteGlass.png';
// for nested routes
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';
const DashBoard = () => {
	const { logOut } = useAuth();
	const handleOnClick = () => {
		document.getElementById('sidebar').classList.toggle('-translate-x-full');
	};
	let { path, url } = useRouteMatch();
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
							to={url}
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							Pay
						</Link>
						<Link
							to={`${url}/myOrder`}
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							My Order
						</Link>
						<Link
							to={`${url}/review`}
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
						>
							Review
						</Link>
						<button
							to="/"
							onClick={logOut}
							className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white
							w-full text-left"
						>
							Logout
						</button>
					</nav>
				</div>

				{/* <!-- content --> */}
				<div className="flex-1 p-10 text-2xl font-bold">
					{/* content goes here */}
					<Switch>
						<Route exact path={path}>
							<Pay />
						</Route>
						<Route path={`${path}/myOrder`}>
							<MyOrder />
						</Route>
						<Route path={`${path}/review`}>
							<Review />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
