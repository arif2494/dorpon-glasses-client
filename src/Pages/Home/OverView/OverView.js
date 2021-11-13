import React from 'react';
import sun from '../../../img/icon/sun.png';
import glass from '../../../img/icon/sunglass.png';
import target from '../../../img/icon/target.png';
const OverView = () => {
	return (
		<div className="container mx-auto">
			<div className="text-center m-2 md:w-6/12 md:mx-auto my-16 ">
				<h2 className="text-3xl font-medium">The Best and The Most Dusable Eye Galsses</h2>
				<p className="font-semibold text-gray-600 mt-3">
					Give your eyes a break with anti-blue light glasses. Reading glasses with blue light protection is
					useful for people who want to preserve their vision. Due to the intense strain of working at the
					computer, your eyes get tired very quickly.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 m-2">
				<div className="flex flex-col items-center  py-12 border-2 rounded-xl hover:shadow-2xl transform  hover:-translate-y-2 transition duration-500 linear hover:bg-green-400 ">
					<img src={sun} alt="!" />
					<h4 className="text-2xl font-semibold text-gray-700">Protect From Bad Sunlight</h4>
					<p className="mt-3 text-center font-semibold text-gray-700 w-9/12">
						Sunglasses might be a small accessory, but they have a large impact. A great pair can elevate
						your outfit and your style.
					</p>
				</div>
				<div className="flex flex-col items-center py-12 border-2 rounded-xl hover:shadow-2xl transform  hover:-translate-y-2 transition duration-500 linear hover:bg-green-400">
					<img src={glass} alt="!" />
					<h4 className="text-2xl font-semibold text-gray-700">Most Durable Glass</h4>
					<p className="mt-3 text-center font-semibold text-gray-700 w-9/12">
						No matter your taste, no matter your budget, no matter how often you lose your damn sunglasses
						in the back of a Lyft.
					</p>
				</div>
				<div className="flex flex-col items-center py-12 border-2 rounded-xl hover:shadow-2xl transform  hover:-translate-y-2 transition duration-500 linear hover:bg-green-400">
					<img src={target} alt="!" />
					<h4 className="text-2xl font-semibold text-gray-700">Best Accuricy</h4>
					<p className="mt-3 text-center font-semibold text-gray-700 w-9/12">
						Sunglasses might be a small accessory, but they have a large impact. A great pair can elevate
						your outfit and your style.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OverView;
