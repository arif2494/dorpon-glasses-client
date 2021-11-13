import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useToast from '../../../hooks/useToast';

const Review = () => {
	const [ review, setReview ] = useState({});
	const { notify, toaster } = useToast();
	const history = useHistory();
	const handleBlur = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const newReviews = { ...review, [name]: value };
		setReview(newReviews);
	};
	const handleRatting = (e) => {
		const value = e.target.value;
		if (parseInt(value) > 5) {
			document.getElementById('ratting').classList.replace('border-green-200', 'border-red-800');
		} else if (parseInt(value) < 6) {
			document.getElementById('ratting').classList.replace('border-red-800', 'border-green-200');
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://frozen-temple-09204.herokuapp.com/reviews', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(review)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					notify('success', 'Review submitted successfully');
					setTimeout(() => {
						history.push('/');
					}, 2000);
				}
			});
	};
	return (
		<div>
			<h1 className="text-3xl font-thin text-center mb-4">Review</h1>
			<div className="flex justify-center">
				<div className="bg-green-200 p-10 w-full md:w-6/12 rounded-2xl shadow-xl">
					<form onSubmit={handleSubmit}>
						<label htmlFor="name" className=" pl-1 text-2xl font-thin">
							Enter Name
						</label>
						<input
							type="number"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2 "
							name="name"
							required
							onBlur={handleBlur}
							id="name"
						/>
						<label htmlFor="ratting" className=" pl-1 text-2xl font-thin">
							Give Your Ratting
						</label>
						<input
							type="text"
							name="ratting"
							id="ratting"
							onBlur={handleBlur}
							required
							onChange={handleRatting}
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2"
						/>
						<small>Please give a value of 1-5</small>
						<br />

						<label htmlFor="address" className=" pl-1 text-2xl font-thin">
							Your Review
						</label>
						<textarea
							type="text"
							className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl w-full  my-2 text-black rounded-xl px-2"
							name="review"
							rows="5"
							required
							onBlur={handleBlur}
							id="address"
						/>

						<button
							type="submit"
							className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl"
						>
							Post This Review
						</button>
					</form>
				</div>
			</div>
			{toaster()}
		</div>
	);
};

export default Review;
