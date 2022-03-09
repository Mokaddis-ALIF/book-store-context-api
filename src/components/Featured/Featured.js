import React from 'react';
import './Featured.css';
import { bookData } from '../Data/Data';
import { FiSearch } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import FeaturedItem from './FeaturedItem';

const Featured = () => {
	return (
		<>
			<section className="featured" id="featured">
				<h1 className="heading">
					<span>featured books</span>
				</h1>

				<div className="swiper featured-slider">
					<Swiper
						breakpoints={{
							// when window width is >= 640px
							640: {
								width: 640,
								slidesPerView: 1,
							},
							// when window width is >= 768px
							998: {
								width: 998,
								slidesPerView: 3,
							},
						}}
						spaceBetween={30}
						slidesPerGroup={3}
						loop={true}
						loopFillGroupWithBlank={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="swiper-wrapper"
					>
						{bookData.map((item) => (
							<SwiperSlide key={item.id} className="swiper-slide box">
								{/* <div className="icons">
								<FiSearch id="f-icon" />
								<FiHeart id="f-icon" />
								<BsEye id="f-icon" />
							</div> */}

								<FeaturedItem item={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Featured;
