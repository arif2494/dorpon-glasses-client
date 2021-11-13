import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useToast from '../../hooks/useToast';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Purchase = () => {
	const { user } = useAuth();
	const [ product, setProduct ] = useState({});
	const [ purchase, setPurchase ] = useState({});
	const { notify, toaster } = useToast();
	const history = useHistory();
	const nameRef = useRef();
	const emailRef = useRef();
	const pNameRef = useRef();
	const pPriceRef = useRef();
	const phoneRef = useRef();
	const addressRef = useRef();
	const { id } = useParams();
	const url = `https://frozen-temple-09204.herokuapp.com/purchase/${id}`;
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
		const phone = phoneRef.current.value;
		const address = addressRef.current.value;
		const data = {
			name,
			email,
			productName,
			productPrice,
			phone,
			address,
			img: product.image
		};
		setPurchase(data);
	};
	// submit order
	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('https://frozen-temple-09204.herokuapp.com/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(purchase)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					notify('success', 'Order place Successfully');
					setTimeout(() => {
						history.push('/exploreProducts');
					}, 2000);
				}
			});
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
					<div className="px-8 py-4">
						{product.image ? (
							<img src={product.image} className="w-full rounded-2xl" alt="!" />
						) : (
							<div className=" flex justify-center h-screen items-center">
								<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
							</div>
						)}

						<div>
							<h1 className="text-3xl font-medium my-2">Name: {product.name}</h1>
							<p className="my-2 text-lg">Description: {product.description}</p>
							<p className="my-2 text-lg font-medium">Price: ${product.price}</p>
						</div>
					</div>
					<div className="m-2">
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
							<label htmlFor="phone" className=" pl-1 text-2xl font-medium">
								Phone
							</label>
							<input
								type="text"
								className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
								ref={phoneRef}
								name="phone"
								id="phone"
							/>
							<label htmlFor="address" className=" pl-1 text-2xl font-medium">
								Your Address
							</label>
							<textarea
								type="text"
								className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl w-full  my-2 text-black rounded-xl px-2"
								name="address"
								rows="4"
								id="address"
								onChange={handleFocus}
								ref={addressRef}
							/>

							<button className="w-full bg-green-600 hover:bg-green-800 my-2 py-2 text-white font-medium text-2xl">
								Confirm Order
							</button>
						</form>
					</div>
				</div>
				{toaster()}
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Purchase;
