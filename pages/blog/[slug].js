import { useState, useEffect } from "react";
import Layout from "components/layout";
import HeaderOne from "components/header/header-one";
import StickyHeader from "components/header/sticky-header";
import PageHeader from "components/page-header";
import BlogDetails from "components/blog-details";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import { useRouter } from "next/router";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "@/components/loader";

const BlogDetail = ({ footerData, headerData }) => {
  const [detaildata, setDetaildata] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
      );
      setDetaildata(res.data);
      setLoading(false);
    };

    fetchDetail();
  }, []);

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Welcome to Andinet Yichalal" footerData={footerData}>
          <HeaderOne headerData={headerData} />
          <StickyHeader />
          <PageHeader
            url={
              detaildata.data &&
              detaildata.data[0].attributes.image.data.attributes.url
            }
            title={detaildata.data && detaildata.data[0].attributes.title}
            crumbTitle="Blog"
          />
          {detaildata.data ? (
            <BlogDetails loading={loading} detaildata={detaildata} />
          ) : (
            <section className="blog-details pt-120 pb-40">
              <Container>
                <Row>
                  <Col lg={5}></Col>
                  <Col lg={4}>
                    <Loader type="spin" color="#aaa" />
                  </Col>
                </Row>
              </Container>
            </section>
          )}
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogDetail;

export async function getServerSideProps() {
  const header = await fetch(`${process.env.API_URL}/api/header-infrormation`);
  const headerData = await header.json();
  const footer = await fetch(
    `${process.env.API_URL}/api/footer-information?populate=*`
  );
  const footerData = await footer.json();

  return {
    props: {
      footerData,
      headerData,
    },
  };
}
