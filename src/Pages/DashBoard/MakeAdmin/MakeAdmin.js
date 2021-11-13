import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useToast from '../../../hooks/useToast';

const MakeAdmin = () => {
	const [ email, setEmail ] = useState('');
	const { notify, toaster } = useToast();
	const history = useHistory();
	const handleBlur = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `http://localhost:5000/admin/${email}`;
		fetch(url, {
			method: 'PUT'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					notify('success', 'Make this admin successfully');
					setTimeout(() => {
						history.push('/dashboard');
					}, 2000);
				} else if (data.matchedCount > 0) {
					notify('error', 'user already admin');
				} else if (data.matchedCount === 0) {
					notify('error', 'Please Login that user first!');
				}
			});
	};
	return (
		<div>
			<div className="my-6">
				<h1 className="text-center text-3xl font-thin">Make an admin</h1>
			</div>
			<div className="flex justify-center">
				<form onSubmit={handleSubmit} className="bg-green-200 p-10  w-full md:w-6/12 rounded-2xl shadow-2xl">
					<label htmlFor="name" className=" pl-1 text-2xl font-thin">
						Enter Email
					</label>
					<input
						type="email"
						className="border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl px-2 "
						name="name"
						onBlur={handleBlur}
						id="name"
					/>
					<small>Be Sure What Are You Doing</small>
					<br />

					<button
						type="submit"
						className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl"
					>
						Make Admin
					</button>
				</form>
			</div>
			{toaster()}
		</div>
	);
};

export default MakeAdmin;
