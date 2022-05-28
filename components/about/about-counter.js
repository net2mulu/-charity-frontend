import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";

const AboutCounter = ({ aboutcardData }) => {
  const { shortIntro, longIntro, description, Listings, background } =
    aboutcardData.data.attributes;
  const { url } = background.data.attributes;
  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="about-counter pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <p>{shortIntro}</p>
              <h3>{longIntro}</h3>
            </div>
            <p className="about-counter__text">{description}</p>
            <ul className="list-unstyled ul-list-one">
              {Listings.map((data,id) => (
                <li key={id}>{data.text}</li>
              ))}
            </ul>
            <div className="about-counter__count">
              <h3 className="odometer">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 8860 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Donation campaigns <br /> are running
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div
              style={{ height: "800px", width: "1000px" }}
              className="about-counter__image clearfix"
            >
              <Image
                src={`${process.env.API_URL + url}`}
                layout="fill"
                objectFit="cover"
                alt=""
                style={{ borderRadius: "15px" }}
                className="float-left"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
