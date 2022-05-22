import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

const banner1 = "/images/main-slider/slider-1-1.jpg";
const banner2 = "/images/main-slider/slider-1-2.jpg";
const banner3 = "/images/main-slider/slider-2-1.jpg";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = ({ bannerData }) => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {bannerData.data.map((data, i) => (
          <SwiperSlide key={i}>
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(http://localhost:1337${data.attributes.picture.data.attributes.url})`,
              }}
            ></div>

            <Container>
              <Row className="row justify-content-end">
                <Col xl={7} lg={12} className="text-right">
                  <p>{data.attributes.small_title}</p>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: data.attributes.headline,
                    }}
                  />

                  <Link href="/about">
                    <a
                      data-target=".donate-options"
                      className="scroll-to-target thm-btn"
                    >
                      Know More
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
