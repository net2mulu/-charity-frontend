import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

import { Container, Row, Col } from "react-bootstrap";

const videoBg = "/images/shapes/video-bg-1-1.png";
const videoImage = "/images/resources/video-1-1.png";

const VideoCardTwo = ({ vedioIntro }) => {
  const { intro, description, link } = vedioIntro.data.attributes;
  const { url } = vedioIntro.data.attributes.thumbnail.data[0].attributes;

  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="YBq_G1nfR9c"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div
                style={{ width: "200px", height: "200px" }}
                className="video-card-two__box"
              >
                <Image
                  style={{ borderRadius: "50%" }}
                  className="img-box"
                  layout="fill"
                  objectFit="cover"
                  src={`${process.env.API_URL + url}`}
                  alt=""
                />
                <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <h3>{intro}</h3>
            </Col>
            <Col lg={5}>
              <p>{description}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
