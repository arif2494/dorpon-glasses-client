import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OverView from '../OverView/OverView';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<Navbar />
			<TopBanner />
			<OverView />
			<Footer />
		</div>
	);
};

export default Home;
