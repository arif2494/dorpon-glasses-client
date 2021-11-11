import React from 'react';
import { Link } from 'react-router-dom';
import bannerGlass from '../../../img/banner-glass2.png';
const TopBanner = () => {
	return (
		<div className="top-banner">
			<div className="container mx-auto">
				<div className="h-700 flex items-center">
					<div className="grid grid-cols-2">
						<div>
							<p className="text-2xl text-gray-400">The Bond Glass</p>
							<h2 className="text-6xl text-gray-800 my-3">
								The future of eye tracking. Understand natural visual attention
							</h2>
							<p className=" text-gray-500">
								This is the glass that featured of james bond. The best glass of the world. This is the
								most trending glass right now. Don't miss out on this. We have much collection of
								glasses like it. Try them Out
							</p>
							<Link to="exploreProducts">
								<button className="py-3 px-6 bg-indigo-500 text-white text-xl rounded hover:bg-indigo-700 my-3">
									Explore More ____
								</button>
							</Link>
						</div>
						<div>
							<img src={bannerGlass} alt="!" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
