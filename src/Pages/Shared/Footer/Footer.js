import React from 'react';
import fb from '../../../img/icon/fb.png';
import insta from '../../../img/icon/insta.png';
import twitter from '../../../img/icon/twitter.png';
const Footer = () => {
	return (
		<div className="bg-gray-800">
			<div className="footer-bg">
				<div className="container mx-auto">
					<div className="flex items-center h-300">
						<div className="grid grid-cols-4 gap-4 text-white">
							<div>
								<h2 className="text-2xl font-medium mb-4">Our Social Media Accounts</h2>
								<ul className="flex justify-between w-9/12">
									<li className="bg-gray-100 hover:bg-green-300 hover:shadow-2xl w-16 rounded-full">
										<a href="/">
											<img src={fb} className="p-2" alt="!" />
										</a>
									</li>
									<li className="bg-gray-100 hover:bg-green-300 hover:shadow-2xl w-16 rounded-full">
										<a href="/">
											<img src={insta} className="p-2" alt="!" />
										</a>
									</li>
									<li className="bg-gray-100 hover:bg-green-300 hover:shadow-2xl w-16 rounded-full">
										<a href="/">
											<img src={twitter} className="p-2" alt="!" />
										</a>
									</li>
								</ul>
							</div>
							<div className=" col-span-2">
								<h2 className="text-4xl text-center font-bold">DORPON</h2>
								<p className="mt-2 font-medium text-justify">
									We made the best industry leading glasses. Use our glasses and have relaxed. Give
									your eyes a break with anti-blue light glasses. Reading glasses with blue light
									protection is useful for people who want to preserve their vision. Due to the
									intense strain of working at the computer, your eyes get tired very quickly.
								</p>
							</div>
							<div>
								<h1 className="text-2xl font-semibold"> Newsletter</h1>
								<p className="font-medium">Subscribe to hear latest offer</p>
								<form>
									<input type="text" className="py-3 w-9/12 text-black focus:outline-none" />
									<button className="py-3 text-black font-semibold  bg-green-300 px-2 hover:bg-green-500">
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
