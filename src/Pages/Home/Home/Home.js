import React from 'react';
import Navbar from '../Navbar/Navbar';
import OverView from '../OverView/OverView';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<Navbar />
			<TopBanner />
			<OverView />
		</div>
	);
};

export default Home;
