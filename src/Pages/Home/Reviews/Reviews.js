import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import ReactStars from 'react-rating-stars-component';

// Import Swiper styles
import './swiper.min.css';
import './pagination.min.css';
import './navigation.min.css';
import './effect-fade.min.css';
import './review.css';
import man from '../../../img/icon/man.png';
const Reviews = () => {
	const [ reviews, setReviews ] = useState([]);
	useEffect(() => {
		fetch('https://frozen-temple-09204.herokuapp.com/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div>
			<h1 className=" text-center my-3 text-3xl font-medium">What Customer Says About Us</h1>
			<Swiper
				modules={[ Navigation, Pagination, Autoplay, EffectFade ]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				effect={'fade'}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true
				}}
				style={{ height: '300px' }}
				navigation
				pagination={{
					type: 'fraction'
				}}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<img src={man} className="icon-width" alt="!" />
						<h1 className="text-2xl my-2 font-medium">{review.name}</h1>
						<ReactStars
							count={5}
							isHalf={true}
							edit={false}
							value={parseFloat(review.ratting)}
							size={24}
							activeColor="#ffd700"
						/>
						<p className="w-9/12 font-medium text-gray-500">{review.review}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Reviews;
