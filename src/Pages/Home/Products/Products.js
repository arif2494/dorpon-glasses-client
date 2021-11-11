import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/products').then((res) => res.json()).then((data) => {
			setProducts(data);
		});
	}, []);
	return (
		<div className="py-6 bg-gray-50">
			<div className="container mx-auto ">
				<h1 className="text-4xl font-medium text-center my-2">Our Products</h1>
				<div className="grid grid-cols-3 gap-4">
					{products.map((product, index) => index < 6 && <Product product={product} key={product.id} />)}
				</div>
			</div>
		</div>
	);
};

export default Products;
