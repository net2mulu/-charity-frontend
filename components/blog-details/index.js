import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogContent from "components/blog-content";
import Comments from "components/comments";
import CommentForm from "components/comment-form";
import BlogSidebar from "components/blog-sidebar";

const BlogDetails = () => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <BlogContent />
            <Comments />
            <CommentForm />
          </Col>
          <Col md={12} lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
