import React from "react";
import Layout from "components/layout";
import HeaderOne from "components/header/header-one";
import StickyHeader from "components/header/sticky-header";
import PageHeader from "components/page-header";
import AboutOne from "components/about/about-one";
import AboutCounter from "components/about/about-counter";
import TeamHome from "components/team/team-home";
import VideoCard from "components/videos/video-card";
import TestimonialsOne from "components/testimonials/testimonials-one";
import BrandCarousel from "components/brand-carousel";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";

const About = (props) => {
  const { url } =
    props.aboutData.data.attributes.header.background.data.attributes;
  const { header, vidcta } = props.aboutData.data.attributes;

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout
          pageTitle="About Andinet Yichalal"
          footerData={props.footerData}
        >
          <HeaderOne headerData={props.headerData} />
          <StickyHeader />
          <PageHeader url={url} title={header.title} crumbTitle="About" />
          <AboutOne aboutData={props.aboutData} />

          <AboutCounter aboutcardData={props.aboutcardData} />
          <TeamHome />
          <VideoCard vidcta={vidcta} />
          <TestimonialsOne cdata={props.aboutData} />
          <BrandCarousel
            brandData={props.brandData}
            extraClass="client-carousel__has-border-top"
          />
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

  const about = await fetch(
    "http://localhost:1337/api/about?populate[header][populate][0]=background&populate[vidcta][populate][0]=background&populate[bcd1][populate][0]=*&populate[bcd2][populate][0]=*&populate[centerLogo][populate][0]=*"
  );
  const aboutData = await about.json();

  const aboutcard = await fetch(
    "http://localhost:1337/api/about-card?populate=*"
  );
  const aboutcardData = await aboutcard.json();

  http: return {
    props: {
      headerData,
      footerData,
      brandData,
      aboutData,
      aboutcardData,
    },
  };
}
