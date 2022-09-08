import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "81fd4bbf336f401099b0e0674e182f75";

const Tesla = () => {
  const [articles, setArticles] = useState([]);
  function getArticles() {
    axios
      .get(
        `${BASE_URL}/everything?q=tesla&from=2022-08-08&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.articles);
      });
  }
  useEffect(() => {
    getArticles();
  }, [articles]);
  return (
    <div>
      {articles.map((article) => (
        <div>
          <h2>{article.author}</h2>
          <h4>{article.title}</h4>
          <h5>{article.urlToImage}</h5>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Tesla;
