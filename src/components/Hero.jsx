// first banner
import vid1 from "../assets/videos/video-banner-1.mp4";
import vid2 from "../assets/videos/video-banner-2.mp4";
import vid3 from "../assets/videos/video-banner-3.mp4";
import vid4 from "../assets/videos/video-banner-4.mp4";
import vid5 from "../assets/videos/video-banner-5.mp4";
import vid6 from "../assets/videos/video-banner-6.mp4";
// second bannar
import pic1 from "../assets/img/photo-banner-1.jpg";
import pic2 from "../assets/img/photo-banner-2.jpg";
import pic3 from "../assets/img/photo-banner-3.jpg";
import pic4 from "../assets/img/photo-banner-4.jpg";
import pic5 from "../assets/img/photo-banner-5.jpg";
import pic6 from "../assets/img/photo-banner-6.jpg";
// thired banner
import med1 from "../assets/img/collection-banner-1.jpg";
import med3 from "../assets/img/collection-banner-3.jpg";
import med4 from "../assets/img/collection-banner-4.jpg";
import med2 from "../assets/videos/collection-banner-2.mp4";
import med5 from "../assets/videos/collection-banner-5.mp4";
import med6 from "../assets/videos/collection-banner-6.mp4";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-3">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        speed="500"
        loop="true"
        css-mode="true"
        pagination={{
          // el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <article className="relative">
            <div className="banner_info banner_info-1">
              <h1 className="banner_title text-yellow-950">
                Top rated stock Videos for free
              </h1>
              <p className="mt-3 text-yellow-950">
                Our curated selection videos is sure to inspire captivate
              </p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                    type: "tween",
                  },
                }}
                className="banner_btn bg-yellow-900"
              >
                Explore Now
              </motion.button>
            </div>

            <div className="banner">
              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid1} type="video/mp4" />
                </video>
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid2} type="video/mp4" />
                </video>
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid3} type="video/mp4" />
                </video>
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid4} type="video/mp4" />
                </video>
              </article>
              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid5} type="video/mp4" />
                </video>
              </article>
              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={vid6} type="video/mp4" />
                </video>
              </article>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="relative">
            <div className="banner_info banner_info-2">
              <h1 className="banner_title text-sky-950">
                High quality stock photo for free!
              </h1>
              <p className="mt-3 text-sky-900">
                Explore our exceptional collection of high-quality stock photos.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                    type: "tween",
                  },
                }}
                className="banner_btn bg-sky-950"
              >
                Explore Now
              </motion.button>
            </div>

            <div className="banner">
              <article className="card-grid">
                <img className="img" src={pic1} alt="" />
              </article>

              <article className="card-grid">
                <img className="img" src={pic2} alt="" />
              </article>
              <article className="card-grid">
                <img className="img" src={pic3} alt="" />
              </article>
              <article className="card-grid">
                <img className="img" src={pic4} alt="" />
              </article>
              <article className="card-grid">
                <img className="img" src={pic5} alt="" />
              </article>
              <article className="card-grid">
                <img className="img" src={pic6} alt="" />
              </article>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="relative">
            <div className="banner_info banner_info-3">
              <h1 className="banner_title text-rose-950">
                Best collections with best medias
              </h1>
              <p className="mt-3 text-rose-900">
                Discover a treasure trove of stunning images, captivating videos
              </p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                    type: "tween",
                  },
                }}
                className="banner_btn bg-rose-950"
              >
                Explore Now
              </motion.button>
            </div>

            <div className="banner">
              <article className="card-grid">
                <img className="img" src={med1} alt="" />
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={med2} type="video/mp4" />
                </video>
              </article>

              <article className="card-grid">
                <img className="img" src={med3} alt="" />
              </article>

              <article className="card-grid">
                <img className="img" src={med4} alt="" />
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={med5} type="video/mp4" />
                </video>
              </article>

              <article className="card-grid">
                <video className="banner_video" autoPlay muted loop>
                  <source src={med6} type="video/mp4" />
                </video>
              </article>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Hero;
