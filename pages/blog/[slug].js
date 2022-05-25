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

const BlogDetail = ({ footerData, headerData }) => {
  const [detaildata, setDetaildata] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  http: useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`
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
          <PageHeader title="Blog Details" crumbTitle="Blog" />
          {detaildata ? (
            <BlogDetails loading={loading} detaildata={detaildata} />
          ) : (
            <h1>Loading...</h1>
          )}
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogDetail;

export async function getServerSideProps() {
  const header = await fetch("http://localhost:1337/api/header-infrormation");
  const headerData = await header.json();
  const footer = await fetch(
    "http://localhost:1337/api/footer-information?populate=*"
  );
  const footerData = await footer.json();
  return {
    props: {
      footerData,
      headerData,
    },
  };
}
