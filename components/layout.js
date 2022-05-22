import React, { useContext, useEffect } from "react";
import Head from "next/head";
import MobileNav from "./mobile-nav";
import SearchPopup from "./search-popup";
import Image from "next/image";
import Footer from "./footer";
import { ToastContainer } from "react-nextjs-toast";


const AppleTouch =  "/images/favicons/apple-touch-icon.png";
const Fevicon32 =  "/images/favicons/favicon-32x32.png";
const Fevicon16 =  "/images/favicons/favicon-16x16.png";

const Layout = ({ pageTitle, children, footerData }) => {
  const handleRadius = () => {
    const dynamicRadius = document.querySelectorAll(".dynamic-radius");
    dynamicRadius.forEach(function (btn) {
      let btnHeight = btn.offsetHeight;
      btn.style.borderBottomLeftRadius = btnHeight / 2 + "px";
      btn.style.borderTopLeftRadius = btnHeight / 2 + "px";
    });
  };

  useEffect(() => {
    handleRadius();
    return () => {
      handleRadius();
    };
  });

  return (
    <div>
      <ToastContainer
        style={{ marginTop: "300px", zIndex: "99909" }}
        align={"center"}
        position={"bottom"}
      />{" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      <MobileNav />
      <SearchPopup />
      <Footer footerData={footerData} />
    </div>
  );
};

export default Layout;
