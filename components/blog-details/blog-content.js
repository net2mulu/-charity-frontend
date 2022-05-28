import Image from "next/image";
import Loader from "components/loader";

const BlogContent = ({ loading, detaildata }) => {
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="blog-card__image">
            <Image
              width="1500"
              height="1000"
              src={`${
                process.env.API_URL +
                detaildata.data[0].attributes.image.data.attributes.url
              }`}
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
          <div className="blog-details__meta">
            <ul className="list-unstyled blog-details__category">
              <li>
                <span>Tags:</span>
              </li>

              {detaildata.data[0].attributes.tags.data.map((data) => (
                <li key={data.id}>
                  <a href="#">{data.attributes.name}</a>
                </li>
              ))}
            </ul>
            <ul className="list-unstyled blog-details__category">
              <li>
                <span>Category:</span>
              </li>
              <li>
                <a href="#">
                  {detaildata.data[0].attributes.category.data.attributes.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
