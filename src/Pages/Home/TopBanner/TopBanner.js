import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerGlass from '../../../img/banner-glass5.png';
import arrow from '../../../img/icon/arrow.png';
const TopBanner = () => {
	return (
		<div className="top-banner">
			<div className="container mx-auto">
				<div className="h-700 flex items-center">
					<div className="grid grid-cols-1 md:grid-cols-2 m-2 md:m-0">
						<div>
							<p className="text-2xl text-gray-400 ">The Bond Glass</p>
							<h2 className="text-3xl md:text-6xl text-gray-800 my-3">
								The future of eye tracking. Understand natural visual attention
							</h2>
							<p className=" text-gray-500">
								This is the glass that featured of james bond. The best glass of the world. This is the
								most trending glass right now. Don't miss out on this. We have much collection of
								glasses like it. Try them Out
							</p>
							<NavLink className="inline" to="exploreProducts">
								<button className="py-2 px-4 md:py-3 md:px-6 bg-green-500 text-white text-xl rounded hover:bg-green-600 my-3  inline ">
									<span>Explore More </span>
									<img src={arrow} className="w-8 ml-1 move-right inline" alt="!" />
								</button>
							</NavLink>
						</div>
						<div>
							<div className="glass-bg">
								<img src={bannerGlass} className="up-down w-full " alt="!" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
