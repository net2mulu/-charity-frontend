import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

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
                backgroundImage: `url(${
                  process.env.API_URL +
                  data.attributes.picture.data.attributes.url
                })`,
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
