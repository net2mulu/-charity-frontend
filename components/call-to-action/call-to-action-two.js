import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";


const CallToActionTwo = ({ ctaData }) => {
  const { small_desc , long_desc } = ctaData.data.attributes;
  const { url } = ctaData.data.attributes.background.data.attributes;
  return (
    <section className="call-to-action-two">
      <div
        className="call-to-action-two__bg"
        style={{ backgroundImage: `url(http://localhost:1337${url})` }}
      ></div>
      <Container className="container pt-80 pb-80">
        <i className="azino-icon-charity call-to-action-two__icon"></i>
        <Row className=" align-items-center">
          <Col lg={7}>
            <div className="block-title">
              <p>{small_desc}</p>
              <h3>{long_desc}</h3>
            </div>
          </Col>
          <Col
            lg={5}
            className=" d-flex justify-content-start justify-content-lg-end"
          >
            <div className="btn-wrap">
              <Link href="#">
                <a className="scroll-to-target thm-btn">Start Donating</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
