import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import OverView from '../OverView/OverView';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<Navbar />
			<TopBanner />
			<OverView />
			<Products />
			<Reviews />
			<Footer />
		</div>
	);
};

export default Home;
