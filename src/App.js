import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/exploreProducts">
						<ExploreProducts />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
