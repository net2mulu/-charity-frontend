import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "components/nav-links";
import Image from "next/image";
import { MenuContext } from "context/menu-context";

const flag1 = "/images/resources/flag-1-1.jpg";
const logoDark = "/images/blogo.png";

const HeaderOne = ({ headerData }) => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const { topmessage, email, phone } = headerData.data.attributes;

  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <Image src={logoDark} width="300" height="120" alt="" />
                  </a>
                </Link>
                <span
                  className="fa fa-bars mobile-nav__toggler"
                  onClick={handleMenuClick}
                ></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <p>{topmessage}</p>
                <div className="main-header__social">
                  <a
                    href={headerData.data.attributes.socials.tw}
                    aria-label="twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={headerData.data.attributes.socials.fb}
                    aria-label="facebook"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a
                    href={headerData.data.attributes.socials.in}
                    aria-label="linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={headerData.data.attributes.socials.ig}
                    aria-label="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
                <NavLinks />
              </nav>

              <div className="main-header__info">
                <ul className="list-unstyled main-header__info-list">
                  <li>
                    <i className="azino-icon-email"></i>
                    <a href="mailto:needhelp@azino.com">{email}</a>
                  </li>
                  <li>
                    <i className="azino-icon-telephone"></i>
                    <a href="tel:666-888-0000">{phone}</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default HeaderOne;
