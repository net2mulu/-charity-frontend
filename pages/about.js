import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import AboutCounter from "../components/about/about-counter";
import TeamHome from "../components/team/team-home";
import VideoCard from "../components/videos/video-card";
import TestimonialsOne from "../components/testimonials/testimonials-one";
import BrandCarousel from "../components/brand-carousel";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const About = (props) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout
          pageTitle="About Andinet Yichalal"
          footerData={props.footerData}
        >
          <PageHeader title="About Page" crumbTitle="About" />
          <HeaderOne headerData={props.headerData} />
          <StickyHeader />
          <AboutOne />
          <BrandCarousel
            brandData={props.brandData}
            extraClass="client-carousel__has-border-top"
          />
          <AboutCounter />
          <TeamHome />
          <VideoCard />
          <TestimonialsOne />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default About;

export async function getServerSideProps() {
  const header = await fetch("http://localhost:1337/api/header-infrormation");
  const headerData = await header.json();

  const footer = await fetch(
    "http://localhost:1337/api/footer-information?populate=*"
  );
  const footerData = await footer.json();

  const brand = await fetch("http://localhost:1337/api/partners?populate=*");
  const brandData = await brand.json();

  return {
    props: {
      headerData,
      footerData,
      brandData,
    },
  };
}
