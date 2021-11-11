import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/exploreProducts">
						<ExploreProducts />
					</PrivateRoute>
					<PrivateRoute path="/purchase/:id">
						<Purchase />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<DashBoard />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
