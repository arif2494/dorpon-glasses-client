import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useToast from '../../../hooks/useToast';

const AddProducts = () => {
	const [ product, setProduct ] = useState({});
	const { notify, toaster } = useToast();
	const history = useHistory();
	const handleBlur = (e) => {
		const { name, value } = e.target;
		const newProduct = { ...product, [name]: value };
		setProduct(newProduct);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const date = new Date();
		product.date = date;
		fetch('https://frozen-temple-09204.herokuapp.com/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(product)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					notify('success', 'product added successfully');
					setTimeout(() => {
						history.push('/dashboard/manageProducts');
					}, 2000);
				}
			});
	};
	return (
		<div>
			<div className="my-6">
				<h1 className="text-center text-3xl font-thin">Add Product</h1>
			</div>
			<div className="flex justify-center">
				<div className=" w-full md:w-6/12">
					<form onSubmit={handleSubmit} className="bg-green-200 p-10 rounded-2xl shadow-2xl">
						<label htmlFor="image" className=" pl-1 text-2xl font-medium">
							Product Image
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							onBlur={handleBlur}
							required
							name="image"
							id="image"
						/>
						<small className="ml-2 text-gray-700">https://source.unsplash.com/690x560?sunglass</small>
						<br />
						<label htmlFor="name" className=" pl-1 text-2xl font-medium">
							Product Name
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							onBlur={handleBlur}
							required
							name="name"
							id="name"
						/>
						<label htmlFor="price" className=" pl-1 text-2xl font-medium">
							Product Price
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							onBlur={handleBlur}
							required
							name="price"
							id="price"
						/>
						<label htmlFor="description" className=" pl-1 text-2xl font-medium">
							Description
						</label>
						<textarea
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl w-full  my-2 text-black rounded-xl px-2"
							onBlur={handleBlur}
							required
							name="description"
							rows="5"
							id="description"
						/>

						<button className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl">
							Add Product
						</button>
					</form>
				</div>
			</div>
			{toaster()}
		</div>
	);
};

export default AddProducts;
