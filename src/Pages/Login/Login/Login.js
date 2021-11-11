import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
	const { signInWithGoogle } = useAuth();
	return (
		<div className="h-700">
			<div className="container mx-auto">
				<h1 className="text-center my-6 text-3xl font-medium">Enter Email and Password For Login</h1>
				<div className=" mx-auto w-4/12 px-4 py-6 bg-green-200">
					<form>
						<label htmlFor="email" className=" pl-1 text-2xl font-medium">
							Enter Email
						</label>
						<input
							type="text"
							className="focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl"
							name=""
							id="email"
						/>
						<label htmlFor="password" className=" pl-1 text-2xl font-medium">
							Enter Password
						</label>
						<input
							type="password"
							className="focus:outline-none focus:ring-2 focus:ring-green-400 shadow-2xl py-3 w-full  my-2 text-black rounded-xl"
							name=""
							id="password"
						/>
						<button className="w-full bg-green-600 hover:bg-green-800 my-2 py-3 text-white font-medium text-2xl">
							Login
						</button>
					</form>
				</div>

				{/* <button onClick={signInWithGoogle} className="py-3 px-6 bg-green-400">
					Google Login
				</button> */}
			</div>
		</div>
	);
};

export default Login;
