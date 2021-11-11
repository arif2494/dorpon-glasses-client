import React from 'react';
import OverView from '../OverView/OverView';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
	return (
		<div>
			<TopBanner />
			<OverView />
			<Products />
			<Reviews />
		</div>
	);
};

export default Home;
