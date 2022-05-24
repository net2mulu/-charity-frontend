import React from "react";
import { Container } from "react-bootstrap";

import PostPaginations from "components/post-paginations";
import BlogCard from "components/blog-card";

const blogImage1 = "/images/blog/blog-1-1.jpg";
const blogImage2 = "/images/blog/blog-1-2.jpg";
const blogImage3 = "/images/blog/blog-1-3.jpg";
const blogImage4 = "/images/blog/blog-1-4.jpg";
const blogImage5 = "/images/blog/blog-1-5.jpg";
const blogImage6 = "/images/blog/blog-1-6.jpg";

const BLOG_DATA = [
  {
    image: blogImage1,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
  {
    image: blogImage2,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
  {
    image: blogImage3,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
  {
    image: blogImage4,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
  {
    image: blogImage5,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
  {
    image: blogImage6,
    title: "Our donation is hope for poor childrens",
    date: "20 May",
    text: "Lorem ipsum is simply free text used by copytyping refreshing.",
    link: "/news-details",
    commentCount: "2 Comments",
    author: "Admin",
  },
];

const BlogPage = () => {
  return (
    <section className="news-page pt-120 pb-120">
      <Container>
        <div className="news-3-col">
          {BLOG_DATA.map(
            (
              { image, title, date, text, link, commentCount, author },
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                date={date}
                text={text}
                link={link}
                commentCount={commentCount}
                author={author}
              />
            )
          )}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default BlogPage;
