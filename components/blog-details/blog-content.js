import Image from "next/image";
const blogDetailsImage = "/images/blog/blog-d-1-1.jpg";

const BlogContent = ({ loading, detaildata }) => {
  console.log(detaildata)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="blog-card__image">
            <Image
              width="1500"
              height="1000"
              src={`http://localhost:1337${detaildata.data[0].attributes.image.data.attributes.url}`}
              alt=""
            />
            <div className="blog-card__date">20 May</div>
          </div>
          <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
            <a href="#">
              <i className="far fa-user-circle"></i> BY: Admin
            </a>
          </div>
          <h3>{detaildata.data[0].attributes.title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: detaildata.data[0].attributes.body,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogContent;
