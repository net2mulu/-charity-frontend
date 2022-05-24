import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const AboutOne = ({ aboutData }) => {
  const { url } = aboutData.data.attributes.centerLogo.data.attributes;
  const { moto, small_title, description1, description2 } =
    aboutData.data.attributes;

  return (
    <section className="about-one pt-120 pb-40">
      <Container>
        <Row>
          <div className="about-one__award">
            <Image
              src={`http://localhost:1337${url}`}
              width="100px"
              height="100px"
              alt=""
            />
          </div>
          <Col lg={5} style={{ width: "565px", height: "272px" }}>
            <Image
              src={`http://localhost:1337${aboutData.data.attributes.bcd1.data.attributes.url}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "15px" }}
              className="img-fluid"
            />
          </Col>
          <Col lg={2} />
          <Col lg={5} style={{ width: "565px", height: "272px" }}>
            <Image
              src={`http://localhost:1337${aboutData.data.attributes.bcd2.data.attributes.url}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "15px" }}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={4}>
              <div className="block-title">
                <p>{small_title}</p>
                <h3>{moto}</h3>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">{description1}</p>
            </Col>
            <Col md={12} lg={4}>
              <p className="team-about__top-text">{description2}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
