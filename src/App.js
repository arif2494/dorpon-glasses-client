import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/exploreProducts">
					<ExploreProducts />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
