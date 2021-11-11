import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
	const { user } = useAuth();
	const [ product, setProduct ] = useState({});
	const [ purchase, setPurchase ] = useState({});
	const history = useHistory();
	const nameRef = useRef();
	const emailRef = useRef();
	const pNameRef = useRef();
	const pPriceRef = useRef();
	const addressRef = useRef();
	const { id } = useParams();
	const url = `http://localhost:5000/purchase/${id}`;
	useEffect(
		() => {
			fetch(url).then((res) => res.json()).then((data) => setProduct(data));
		},
		[ url ]
	);
	// handle Focus
	const handleFocus = () => {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const productName = pNameRef.current.value;
		const productPrice = pPriceRef.current.value;
		const address = addressRef.current.value;
		const data = {
			name,
			email,
			productName,
			productPrice,
			address,
			img: product.image
		};
		setPurchase(data);
	};
	// submit order
	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(purchase)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					history.push('/');
				}
			});
	};

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-2 gap-4 my-8">
				<div className="px-8 py-4">
					<img src={product.image} className="w-full rounded-2xl" alt="!" />
					<div>
						<h1 className="text-3xl font-medium my-2">Name: {product.name}</h1>
						<p className="my-2 text-lg">Description: {product.description}</p>
						<p className="my-2 text-lg font-medium">Price: ${product.price}</p>
					</div>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<label htmlFor="name" className=" pl-1 text-2xl font-medium">
							Enter Name
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2 "
							defaultValue={user.displayName}
							ref={nameRef}
							name="name"
							id="name"
						/>
						<label htmlFor="email" className=" pl-1 text-2xl font-medium">
							Enter Email
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							defaultValue={user.email}
							ref={emailRef}
							name="email"
							id="email"
						/>
						<label htmlFor="productName" className=" pl-1 text-2xl font-medium">
							Product Name
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							defaultValue={product.name}
							ref={pNameRef}
							disabled
							name="productName"
							id="productName"
						/>
						<label htmlFor="price" className=" pl-1 text-2xl font-medium">
							Product Price
						</label>
						<input
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
							defaultValue={product.price}
							ref={pPriceRef}
							disabled
							name="price"
							id="price"
						/>
						<label htmlFor="address" className=" pl-1 text-2xl font-medium">
							Your Address
						</label>
						<textarea
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl w-full  my-2 text-black rounded-xl px-2"
							name="address"
							rows="5"
							id="address"
							onChange={handleFocus}
							ref={addressRef}
						/>

						<button className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl">
							Confirm Order
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
