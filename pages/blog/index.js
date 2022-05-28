import React from "react";
import Layout from "components/layout";
import HeaderOne from "components/header/header-one";
import StickyHeader from "components/header/sticky-header";
import BlogPage from "components/blog/blog-page";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import PageHeader from "components/page-header";

const Blog = ({ footerData, headerData, blogHeader }) => {
  const { title } = blogHeader.data.attributes.BlogHeader;
  const { url } =
    blogHeader.data.attributes.BlogHeader.background.data.attributes;
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Welcome to Andinet Yichalal" footerData={footerData}>
          <HeaderOne headerData={headerData} />
          <StickyHeader />
          <PageHeader title={title} url={url} crumbTitle="Blog" />
          <BlogPage />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Blog;

export async function getServerSideProps() {
  const header = await fetch(`${process.env.API_URL}/api/header-infrormation`);
  const headerData = await header.json();
  const footer = await fetch(
    `${process.env.API_URL}/api/footer-information?populate=*`
  );
  const footerData = await footer.json();
  const blog = await fetch(
    `${process.env.API_URL}/api/blog-header?populate[BlogHeader][populate][0]=background`
  );
  const blogHeader = await blog.json();
  return {
    props: {
      footerData,
      headerData,
      blogHeader,
    },
  };
}
