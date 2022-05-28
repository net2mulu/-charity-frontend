import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const bgImage = "/images/backgrounds/page-header-1-1.jpg";
const heart = "/images/shapes/heart-2-1.png";

const VideoCard = ({ vidcta }) => {
  const { small_desc, long_desc, background } = vidcta;
  const { url } = background.data.attributes;
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${process.env.API_URL + url})` }}
      ></div>

      <Container className=" text-center pt-120 pb-120">
        <p>{small_desc}</p>
        <h3>{long_desc}</h3>
        <div className="video-card__btn-block">
          <Link href="/cause-details">
            <a className="thm-btn dynamic-radius">Start Donating</a>
          </Link>

          <span
            onClick={() => setOpen(true)}
            className="video-popup video-card__btn"
          >
            <i className="fa fa-play"></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
