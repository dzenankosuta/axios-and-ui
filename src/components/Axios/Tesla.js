import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginate from "../Pagination/Paginate";
import { Grid } from "@nextui-org/react";
import Card5 from "../Card/Card5";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "12b2f0f1d20f4884bfe79061957baf4b";

const Tesla = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  function getArticles(page) {
    axios
      .get(
        `${BASE_URL}/everything?q=tesla&from=2022-08-09&sortBy=publishedAt&pageSize=12&page=${page}&apiKey=${API_KEY}`
      )
      .then((res) => {
        setPagination({
          page: page,
          totalPages: Math.ceil(res.data.totalResults / 12),
        });
        setArticles(res.data.articles);
      });
  }
  useEffect(() => {
    getArticles(1);
  }, [articles]);
  return (
    <div>
      {articles.map((article) => (
        <div>
          <h2>{article.author}</h2>
          <h4>{article.title}</h4>
          <h5>{article.urlToImage}</h5>
          <h5>{pagination.page}</h5>
          <h5>{pagination.totalPages}</h5>
          <hr />
        </div>
      ))}
      <Paginate
        initialPage={pagination.page}
        totalPages={pagination.totalPages}
      />
    </div>
  );
};

export default Tesla;
