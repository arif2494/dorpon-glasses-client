import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import google from '../../../img/icon/google.png';
const Register = () => {
	const [ userData, setUserData ] = useState({});
	console.log(userData);
	const { signInWithGoogle, registerWithEmailAndPassword } = useAuth();
	const handleOnBlur = (e) => {
		const data = { ...userData };
		const name = e.target.name;
		const value = e.target.value;
		data[name] = value;
		setUserData(data);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		registerWithEmailAndPassword(userData.email, userData.password);
	};
	return (
		<div className="h-700">
			<div className="container mx-auto">
				<h1 className="text-center my-6 text-3xl font-medium">Enter Email and Password For Register</h1>
				<div className=" mx-auto w-4/12 px-4 py-6 bg-green-200">
					<form onSubmit={handleSubmit}>
						<label htmlFor="email" className=" pl-1 text-2xl font-medium">
							Enter Email
						</label>
						<input
							type="text"
							className="focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl"
							name="email"
							id="email"
							onBlur={handleOnBlur}
						/>
						<label htmlFor="password" className=" pl-1 text-2xl font-medium">
							Enter Password
						</label>
						<input
							type="password"
							className="focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl"
							name="password"
							onBlur={handleOnBlur}
							id="password"
						/>
						<button className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl">
							Login
						</button>
					</form>
					<div className="text-center">
						<p>Already have an account?</p>
						<Link className="text-blue-700" to="/login">
							Login Here...
						</Link>
					</div>
					<div className="flex justify-center ">
						<button onClick={signInWithGoogle} className="flex  flex-col items-center">
							<img src={google} className="w-12" alt="!" />
							<p>Sign Up With Google</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;