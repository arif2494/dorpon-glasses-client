import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<div className=" flex justify-center h-screen items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.displayName ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export default PrivateRoute;
