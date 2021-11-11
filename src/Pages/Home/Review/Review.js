import React from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import './swiper.min.css';
import './pagination.min.css';
import './navigation.min.css';
import './effect-fade.min.css';
import './review.css';
import man from '../../../img/icon/man.png';
const Review = () => {
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
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<img src={man} className="icon-width" alt="!" />
					<h1 className="text-2xl my-2 font-medium">John Doe</h1>
					<p className="w-9/12 font-medium text-gray-500">
						The best sun glass buying website. I strongly recomende it.
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={man} className="icon-width" alt="!" />
					<h1 className="text-2xl my-2 font-medium">John Harry</h1>
					<p className="w-9/12 font-medium text-gray-500">Strongly recomended, Becuse of thei products</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={man} className="icon-width" alt="!" />
					<h1 className="text-2xl my-2 font-medium">John Larry</h1>
					<p className="w-9/12 font-medium text-gray-500">Best Sunglass manufacture in the world.</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={man} className="icon-width" alt="!" />
					<h1 className="text-2xl my-2 font-medium">John Bobs</h1>
					<p className="w-9/12 font-medium text-gray-500">
						Very good service , Try at least one time, won't regret
					</p>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Review;
