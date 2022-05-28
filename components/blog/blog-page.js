import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import PostPaginations from "components/post-paginations";
import BlogCard from "components/blog/blog-card";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.API_URL}/api/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${blogPerPage}`
      );
      setBlogs(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div>
      <section className="news-page pt-120 pb-120">
        <Container>
          <div className="news-3-col">
            {blogs.data &&
              blogs.data.map((data, index) => (
                <BlogCard
                  key={index}
                  image={`${
                    process.env.API_URL +
                    data.attributes.image.data.attributes.url
                  }`}
                  title={
                    data.attributes.title.length > 40
                      ? `${data.attributes.title.substring(0, 40)}...`
                      : data.attributes.title
                  }
                  date={
                    new Date(data.attributes.createdAt).getDate() +
                    " " +
                    new Date(data.attributes.createdAt).toLocaleString(
                      "default",
                      {
                        month: "short",
                      }
                    )
                  }
                  text={
                    data.attributes.description.length > 100
                      ? `${data.attributes.description.substring(0, 100)}...`
                      : data.attributes.description
                  }
                  link={data.attributes.slug}
                  author={"admin"}
                />
              ))}
          </div>
          <PostPaginations
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            meta={blogs?.meta}
          />
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;
