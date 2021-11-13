import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ExploreProducts = () => {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		fetch('https://frozen-temple-09204.herokuapp.com/products').then((res) => res.json()).then((data) => {
			setProducts(data);
		});
	}, []);
	return (
		<React.Fragment>
			<Navbar />
			<div className="py-6 bg-gray-50">
				<div className="container mx-auto ">
					<h1 className="text-4xl font-medium text-center my-2">Our Products</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 m-2 gap-4">
						{products.map((product) => <Product product={product} key={product._id} />)}
					</div>
				</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default ExploreProducts;
