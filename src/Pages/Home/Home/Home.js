import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OverView from '../OverView/OverView';
import Products from '../Products/Products';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<Navbar />
			<TopBanner />
			<OverView />
			<Products />
			<Review />
			<Footer />
		</div>
	);
};

export default Home;
