import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginate from "../Pagination/Paginate";
import { Grid } from "@nextui-org/react";
import Card5 from "../Card/Card5";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "12b2f0f1d20f4884bfe79061957baf4b";

const BusinessHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState({});
  function getArticles(page) {
    axios
      .get(
        `${BASE_URL}/top-headlines?country=us&category=business&pageSize=12&page=${page}&apiKey=${API_KEY}`
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
      <Grid.Container gap={2}>
        {articles.map((article) => (
          <Grid xs={12} sm={4}>
            <Card5
              author={article.author}
              title={article.title}
              urlToImage={article.urlToImage}
            />
          </Grid>
        ))}
      </Grid.Container>
      <Paginate
        initialPage={pagination.page}
        totalPages={pagination.totalPages}
      />
    </div>
  );
};

export default BusinessHeadlines;
