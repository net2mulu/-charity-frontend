import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const bgImage = "/images/shapes/testimonials-map-1-1.png";

const image1 = "/images/about/vision.png";
const image2 = "/images/about/mission.png";
const image3 = "/images/about/values.png";

const TestimonialsOne = ({ cdata }) => {
  const { company, csmall_desc, clong_desc, vision, mission, values } =
    cdata.data.attributes;
  return (
    <section
      className="testimonials-one pt-120 pb-90"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>{company}</p>
                <h3>{csmall_desc}</h3>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">{clong_desc}</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={4}>
            <div className="testimonials-one__single">
              <div
                style={{ paddingTop: "20px" }}
                className="testimonials-one__image"
              >
                <Image src={image1} width="50" height="50" alt="" />
              </div>

              <h3 style={{ marginTop: "5px" }}>Vision</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: vision,
                }}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="testimonials-one__single">
              <div
                style={{ paddingTop: "20px" }}
                className="testimonials-one__image"
              >
                <Image src={image2} width="50" height="50" alt="" />
              </div>

              <h3 style={{ marginTop: "5px" }}>Mission</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: mission,
                }}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="testimonials-one__single">
              <div
                style={{ paddingTop: "20px" }}
                className="testimonials-one__image"
              >
                <Image src={image3} width="50" height="50" alt="" />
              </div>

              <h3 style={{ marginTop: "5px" }}>Values</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: values,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
