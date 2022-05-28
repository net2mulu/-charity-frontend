import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-nextjs-toast";

const logoLight = "/images/wlogo.png";
const blogPost1 = "/images/resources/footer-img-1-1.jpg";
const blogPost2 = "/images/resources/footer-img-1-2.jpg";

const submitForm = async (e) => {
  e.preventDefault();
  await axios
    .post(`${process.env.API_URL}/api/newsletter-emails`, {
      data: {
        email: e.target.email.value,
      },
    })
    .then((responce) => {
      toast.notify(
        responce.statusText == "OK"
          ? "You have successfully Submitted your email"
          : "Your trial was not submitted for some reason.",
        {
          duration: 5,
          type: responce.statusText == "OK" ? "success" : "danger",
        }
      );
      e.target.reset();
    });
};

const Footer = ({ footerData }) => {
  const { small_desc, phone, email, address, domain, socials } =
    footerData.data.attributes;

  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <Image
                      src={logoLight}
                      width="101"
                      height="40"
                      className="footer-widget__logo"
                      alt=""
                    />
                  </a>
                </Link>
                <p>{small_desc}</p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>
                      {phone}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>
                      {email}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>
                      {address}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/causes">
                      <a>Our Causes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a>New Campaign</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>Site Map</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Help</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/causes">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Terms</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  <li>
                    <img src={blogPost1} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>You can help the poor in need</a>
                      </Link>
                    </h3>
                  </li>
                  <li>
                    <img src={blogPost2} alt="" />
                    <p>22 May, 2020</p>
                    <h3>
                      <Link href="/news-details">
                        <a>Rise fund for Healthy Food</a>
                      </Link>
                    </h3>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p>Signup now to get daily latest news & updates from us</p>
                <form
                  onSubmit={submitForm}
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2020 by {domain}</p>
          <div className="footer-social">
            {socials.map((data) => (
              <a key={data.id} href={data.link} aria-label={data.label}>
                <i className={data.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
