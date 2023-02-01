import axios from "axios";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import relateTime from "dayjs/plugin/relativeTime";
import currencyFormatter from "../utils/currencyFormatter";
import { Link, useLocation } from "react-router-dom";
dayjs.extend(relateTime);

export default function Products() {
  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/products?pagSize=${pageSize}$page=${currentPage}`
      )
      .then((res) => {
        setPage(res.data);
      });
  }, [currentPage, pageSize]);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
  }, [location]);

  if (!page) {
    return (
      <div className="'spinner-grow" role="status">
        <span className="visally-hidden">Loading...</span>
      </div>
    );
  }

  const getPaginations = () => {
    let result = [];
    // first page adding
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
    );
    // front trible dots
    if (page.page - 3 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    if (page.page !== 1 && page.page !== page.totalPages) {
      result.push(
        <li className={`page-item active`}>
          <a href="#" className="page-link">
            {page.page}
          </a>
        </li>
      );
    }
    if (page.page === 1 && page.page === 2) {
      result.push(
        <li className={`page-item active`}>
          <a href="#" className="page-link">
            2
          </a>
        </li>
      );
    }

    if (page.totalPages - 3 >= page.page) {
      // back trible dots
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    // last page adding
    result.push(
      <li className={`page-item ${page.totalPages === page.page && "active"}`}>
        <a className="page-link" href="#">
          {page.totalPages}
        </a>
      </li>
    );
    return result;
  };
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-end mb-4">
          <label>
            Хуудаслалт &nbsp;
            <select
              className="form-control d-inline-block w-auto"
              onChange={(e) => setPageSize(e.target.value)}
              value={pageSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {page?.item?.map((product) => {
            return (
              <div className="col-sm-4" key={product.id}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-card-desc">
                    <div className="product-card-date">
                      {dayjs(Number(product.createdAt) * 1000).fromNow()}
                    </div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">
                      {currencyFormatter(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <nav aria-label="...">
            <ul className="pagination pagination-lg justify-content-center ">
              <li className={`page-item ${page?.page === 1 && "disabled"}`}>
                <Link
                  to={`/products?pageSize={pageSize}&page=&{currentPage-1}`}
                  className="page-link"
                >
                  ?
                </Link>
              </li>
              {getPaginations()}
              <li
                className={`page-item ${
                  page.page === page.totalPages && "disabled"
                }`}
              >
                <Link
                  to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
                  className="page-link"
                  href="#"
                >
                  !
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
