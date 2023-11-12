import SectionTitle from "../../sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slideImg1 from '../../assets/images/slide1.jpg';
import slider2 from '../../assets/images/slide2.jpg';
import slider3 from '../../assets/images/slide3.jpg';
import slider4 from '../../assets/images/slide4.jpg';
import slider5 from '../../assets/images/slide5.jpg';

const Category = () => {
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slideImg1} alt="" />
                    <p className="text-center text-3xl -mt-20">SALADS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className="text-center text-3xl -mt-20">PIZZAS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="img" />
                    <p className="text-center text-3xl -mt-20">SOUPS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className="text-center text-3xl -mt-20">DESSERTS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="img" />
                    <p className="text-center text-3xl -mt-20">SALADS</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;