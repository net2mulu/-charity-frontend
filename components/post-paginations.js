import React from "react";

const PostPaginations = ({ currentPage, meta, setCurrentPage }) => {
  const pageNumbers = [];
  if (meta) {
    for (let i = 0; i <= meta.pagination.pageCount - 1; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <ul className="list-unstyled post-pagination d-flex justify-content-center align-items-center">
      <li
        onClick={
          currentPage == 1 ? null : () => setCurrentPage(currentPage - 1)
        }
      >
        <a className={`${currentPage == 1 ? "btn disabled" : ""} `} href="#">
          <i className="far fa-angle-left"></i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li onClick={() => setCurrentPage(number + 1)} key={number}>
          <a
            style={{
              backgroundColor: currentPage == number + 1 ? "#4ecd99" : "",
              color: currentPage == number + 1 ? "#fff" : "",
            }}
            href="#"
          >
            {number + 1}
          </a>
        </li>
      ))}

      <li
        onClick={
          meta?.pagination?.pageCount == currentPage
            ? null
            : () => setCurrentPage(currentPage - 1)
        }
      >
        <a
          className={`${
            meta?.pagination?.pageCount == currentPage ? "btn disabled" : ""
          }`}
          href="#"
        >
          <i className="far fa-angle-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default PostPaginations;
