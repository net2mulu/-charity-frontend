import Image from "next/image";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";


const BrandCarousel = ({ extraClass, brandData }) => {
  console.log(brandData);
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
            {brandData.data.map((data) => (
              <SwiperSlide key={data.id}>
                <div>
                  <Image
                    src={`http://localhost:1337${data.attributes.logo.data.attributes.url}`}
                    alt=""
                    width={data.attributes.logo.data.attributes.width}
                    height={data.attributes.logo.data.attributes.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
