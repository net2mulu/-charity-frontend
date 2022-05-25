import { Container, Row, Col } from "react-bootstrap";
import BlogContent from "components/blog-details/blog-content";
import BlogSidebar from "components/blog-details/blog-sidebar";

const BlogDetails = ({loading, detaildata }) => {
  return (
    <section className="blog-details pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={12}>
            <BlogContent loading={loading} detaildata={detaildata} />
          </Col>
          {/* <Col md={12} lg={4}>
            <BlogSidebar />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
