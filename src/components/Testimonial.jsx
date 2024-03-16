import { testimonialData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Testimonial = () => {
  return (
    <section className="bg-pink-200 py-[40px]lg:pb-[160px] lg:pt-0">
      <div className="container mx-auto">
        <Swiper>
          {testimonialData.map((slide, index) => {
            return <SwiperSlide key={index}>slide</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
