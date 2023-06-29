import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperStyle/testimonial.css";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper";
import testimonial from "../assets/see-bg.jpg";
import { reviews } from "../Context/reviews";
const Testimonial = () => {
  return (
    <section
      style={{
        background: `url(${testimonial})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-6 md:py-16"
    >
      <div class=" px-5 py-24  mx-6 md:mx-16 md:border border-gray-400 md:p-16">
        <div>
          <span className="text-gray-400 text-lg  text-center">
            Testimonial
          </span>
          <h3 className="lg:text-5xl text-2xl my-2 md:text-3xl mt-2 text-center text-white font-semibold">
            Why Clients Choose Us?{" "}
          </h3>
        </div>
        <span className="text-[#b1976b] text-xl font-thin">|</span>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow ,Autoplay, Pagination, Keyboard, Navigation]}
          className="mySwiper"
        >
            {
                reviews.map(review=>(
                   <SwiperSlide key={review.des}>
                     <div class="xl:w-1/2 pt-8 lg:w-3/4 w-full mx-auto text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block w-14 h-14 text-[#b1976b] mb-8"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed text-gray-300 text-lg">
                      {review.des}
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-[#b1976b] mt-8 mb-6"></span>
                    <h2 class="text-gray-100 font-bold title-font tracking-wider text-lg">
                      {review.name}
                    </h2>
                    <p class="text-[#b1976b]">{review.title}</p>
                  </div>
                   </SwiperSlide>
                ))
            }
        </Swiper>
       
      </div>
    </section>
  );
};

export default Testimonial;
