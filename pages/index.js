import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import AboutCounter from "../components/about/about-counter";
import ServiceOne from "../components/services/service-one";
import CausesHome from "../components/causes/causes-home";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import BlogHome from "../components/blog/blog-home";
import TeamHome from "../components/team/team-home";
import BrandCarousel from "../components/brand-carousel";

export default function Home(props) {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout
          pageTitle="Welcome to Andinet Yichalal"
          footerData={props.footerData}
        >
          <HeaderOne headerData={props.headerData} />
          <StickyHeader />
          <MainSlider bannerData={props.bannerData} />
          <VideoCardTwo vedioIntro={props.vedioIntro} />
          <ServiceOne homeServices={props.homeServices} />
          <AboutCounter />
          <CausesHome />
          <CallToActionTwo ctaData={props.ctaData} />
          <TeamHome />
          <BlogHome />
          <BrandCarousel
            brandData={props.brandData}
            extraClass="client-carousel__has-top-shadow"
          />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
}

export async function getServerSideProps() {
  const header = await fetch("http://localhost:1337/api/header-infrormation");
  const headerData = await header.json();
  const banner = await fetch("http://localhost:1337/api/banners?populate=*");
  const bannerData = await banner.json();
  const vedio = await fetch("http://localhost:1337/api/vedio-intro?populate=*");
  const vedioIntro = await vedio.json();
  const homeservice = await fetch("http://localhost:1337/api/home-services");
  const homeServices = await homeservice.json();
  const footer = await fetch(
    "http://localhost:1337/api/footer-information?populate=*"
  );
  const footerData = await footer.json();

  const cta = await fetch("http://localhost:1337/api/cta?populate=*");
  const ctaData = await cta.json();

  const brand = await fetch("http://localhost:1337/api/partners?populate=*");
  const brandData = await brand.json();

  return {
    props: {
      headerData,
      bannerData,
      vedioIntro,
      homeServices,
      footerData,
      ctaData,
      brandData,
    },
  };
}
