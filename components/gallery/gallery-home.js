import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import GalleryCard from "components/gallery-card";

const galleryImage1 =  "/images/gallery/gallery-3-1.jpg";
const galleryImage2 =  "/images/gallery/gallery-3-2.jpg";
const galleryImage3 =  "/images/gallery/gallery-3-3.jpg";
const galleryImage4 =  "/images/gallery/gallery-3-4.jpg";
const galleryImage5 =  "/images/gallery/gallery-3-5.jpg";

SwiperCore.use([Autoplay]);

const GalleryHome = () => {
  const galleryOptions = {
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      425: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1289: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1440: {
        spaceBetween: 20,
        slidesPerView: 5
      }
    }
  };
  return (
    <section className="gallery-home-one">
      <Container fluid>
        <Swiper {...galleryOptions}>
          <SwiperSlide>
            <GalleryCard image={galleryImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage2} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage3} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage4} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage5} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage2} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage3} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage4} />
          </SwiperSlide>
          <SwiperSlide>
            <GalleryCard image={galleryImage5} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default GalleryHome;
