// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";
import Swipersliderdiv from "./Swipersliderdiv";

export default function Carousel() {
  return (
    <>
      <h2
        className="display-5 text-center"
        style={{ fontFamily: "var(--head-font)", color: "black" }}
      >
        -Testinomals-
      </h2>
      <h3
        className=" text-center"
        style={{ fontFamily: "var(--head-font)", color: "black" }}
      >
        Reviews by our Valued Customers
      </h3>
      <div className="container">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            770: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          // grid={{
          //   rows: 1,
          // }}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Grid, Pagination]}
          className="mySwiper p-5"
        >
          <div>
            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Megha Shrimal"
                review="Nice food good service starters and south indian
u must try the manager sitaramji took all the efforts to make our food serve on time hot and with proper taste
"
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Satish Mishra"
                review="We nice service and superb food
Excellent management by Sitaram ji"
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Vaibhav"
                review="Had an amazing experience at Shree Balaji!!! Sitaram ji was a great host for our party. Quality food, quick service and good customer service. Highly recommend to visit!!"
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Riya Patel"
                review="The decoration on our reception day was top notch. Thakkar decorators delivered exactly what they promised to deliver. Everything went smoothly and we enjoyed the function."
                rtime="4 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Kavetta Mundraa Acharya"
                review="Amazing food, nice hospitality.. We visit very often.. Sitaram ji Manager is very co operative and nice spoken."
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Vasaikar Uttam"
                review="Very nice hall we visit here for my friend rings ceremony, place was very good and also get free parking for 5,6 car front of the hotel"
                rtime="a year ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="Ansh Sanjay Jaiswal"
                review="Well ....The food here is awesome it taste too good nd also the service provided by Sitaram Ji was too good ....Do visit🫶😊😊"
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="vicky doshi"
                review="Wonderful ambience, excellent food, best service given by Manager Mr. Sitaram, fast service, always visit with my family for all events"
                rtime="7 months ago"
              />
            </SwiperSlide>

            <SwiperSlide id="swiper-slide5">
              <Swipersliderdiv
                name="YASH GANDECHA"
                review="Great place for Event, amazing ambience, Fabulous hospitality. thanks for wonderful experience. Special Thanks to Priyanka and Suraj for cooperation throughout the event. ☺️👍"
                rtime="6 months ago"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
