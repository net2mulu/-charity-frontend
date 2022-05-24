import React from "react";
import Layout from "components/layout";
import HeaderOne from "components/header/header-one";
import StickyHeader from "components/header/sticky-header";
import PageHeader from "components/page-header";
import BlogPage from "components/blog/blog-page";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";

const Blog = ({ footerData, headerData }) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Welcome to Andinet Yichalal" footerData={footerData}>
          <HeaderOne headerData={headerData} />
          <StickyHeader />
          <PageHeader title="Blog Page" crumbTitle="Blog" />
          <BlogPage />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Blog;

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
