import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const serviceBg = "/images/backgrounds/service-hand-bg-1-1.png";
const serviceLine = "/images/shapes/service-line-1-1.png";

const ServiceOne = ({ homeServices }) => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <p>Together we can!</p>
          <h3>
            We believe that we can save <br /> more lifes with you, involve in
            one of these areas.
          </h3>
        </div>
        <Row>
          {homeServices.data.map((data, index) => (
            <Col md={6} lg={3} key={`service-one-key-${index}`}>
              <div className={`service-one__box`}>
                <div
                  className={`service-one__icon ${data.attributes.extraClassName}`}
                >
                  <div className="service-one__icon-inner">
                    <i className={data.attributes.icon}></i>
                  </div>
                </div>
                <h3>
                  <Link href={data.attributes.link}>
                    <a>{data.attributes.title}</a>
                  </Link>
                </h3>
                <p>{data.attributes.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
