import axios from "axios";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";

import relateTime from "dayjs/plugin/relativeTime";
import currencyFormatter from "../utils/currencyFormatter";
import { Link, useLocation, useNavigate } from "react-router-dom";
dayjs.extend(relateTime);

export default function Products() {
  const [isReady, setIsReady] = useState(false);

  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const [searchQuery, setSearchQuery] = useState("");

  const [locationQuery, setLocationQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const newQuery = new URLSearchParams();
    newQuery.set("pageSize", pageSize);
    newQuery.set("page", currentPage);
    if (searchQuery !== "") {
      newQuery.set("q", searchQuery);
    }
    setLocationQuery(newQuery.toString());
  }, [pageSize, currentPage, searchQuery]);

  useEffect(() => {
    navigate(`/products?${locationQuery}`);
  }, [locationQuery]);

  useEffect(() => {
    if (isReady) {
      getResults();
    }
  }, [isReady]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setPageSize(Number(searchParams.get("pageSize")));
    }
    if (searchParams.has("q")) {
      setSearchQuery(searchParams.get("q"));
    }
    if (isReady) {
      getResults();
    } else {
      setIsReady(true);
    }
  }, [location]);

  const getResults = () => {
    const urlParams = new URLSearchParams();
    urlParams.set("pageSize", pageSize);
    urlParams.set("page", currentPage);
    if (searchQuery !== "") {
      urlParams.set("q", searchQuery);
    }
    axios
      .get(`http://localhost:8000/products?${urlParams.toString()}`)
      .then((res) => {
        setPage(res.data);
      });
  };

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
        <div className="input-group mb-3">
          <select className="form-control">
            <option selected>Price</option>
            <option value="1"> 100 000₮</option>
            <option value="2"> 200 000₮ </option>
            <option value="3"> 300 000₮</option>
            <option value="4"> 400 000₮</option>
            <option value="5"> 600 000₮</option>
            <option value="6"> 800 000₮</option>
            <option value="7">1 000 000₮</option>
            <option value="9">2 000 000₮</option>
            <option value="10">3 000 000₮</option>
            <option value="11">4 000 000₮</option>
          </select>
        </div>

        <div className="d-flex justify-content-end mb-4">
          <label className="me-4">
            Нэрээр хайх &nbsp;
            <input
              type="text"
              className="form-control"
              placeholder="Барааны нэр..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </label>

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
