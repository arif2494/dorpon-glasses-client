import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	const { name, image, description, price, _id } = product;
	const url = `/purchase/${_id}`;
	return (
		<div className="p-4 rounded-2xl hover:bg-green-100 transform hover:-translate-y-2 ease-linear duration-200   shadow-xl ">
			<div>
				<img src={image} className="w-full rounded-2xl" alt="!" />
			</div>
			<div>
				<h1 className="text-2xl font-semibold my-2">{name}</h1>
				<p className="text-lg italic font-medium">{description.substring(0, 100)}...</p>
				<p className="text-lg font-medium my-2">Price: ${price}</p>
				<Link to={url}>
					<button className="py-3 px-6 bg-green-500 text-white rounded-xl hover:bg-green-700 font-medium">
						Buy Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
