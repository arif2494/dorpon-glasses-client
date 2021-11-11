import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
	const { signInWithGoogle } = useAuth();
	return (
		<div className="container mx-auto">
			<h1>This is login</h1>
			<button onClick={signInWithGoogle} className="py-3 px-6 bg-green-400">
				Google Login
			</button>
		</div>
	);
};

export default Login;
