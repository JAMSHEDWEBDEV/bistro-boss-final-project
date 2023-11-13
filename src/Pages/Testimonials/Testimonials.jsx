import SectionTitle from "../../sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from 'react-icons/bi';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                            </div>
                            <div className="flex justify-center text-7xl my-10">
                                <h1><BiSolidQuoteLeft/></h1>
                            </div>
                            <div className="px-24 text-center">
                                <p>{review.details}</p>
                                <h1 className="text-5xl text-yellow-600 font-bold">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;