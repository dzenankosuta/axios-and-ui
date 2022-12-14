import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Grid } from "@nextui-org/react";
import Card5 from "./components/Card/Card5";
import Paginate from "./components/Pagination/Paginate";
import Tesla from "./components/Axios/Tesla";
import BusinessHeadlines from "./components/Axios/BusinessHeadlines";
import TechCrunch from "./components/Axios/TechCrunch";
import WallStreet from "./components/Axios/WallStreet";

const App = () => {
  const [show, setShow] = useState("");
  const handleTesla = () => {
    setShow("tesla");
  };
  const handleBusinessHeadlines = () => {
    setShow("headlines");
  };
  const handleTechCrunch = () => {
    setShow("crunch");
  };
  const handleWallStreet = () => {
    setShow("wallstreet");
  };
  return (
    <>
      <Header
        showTesla={handleTesla}
        showBusinessHeadlines={handleBusinessHeadlines}
        showTechCrunch={handleTechCrunch}
        showWallStreet={handleWallStreet}
      />
      {show === "tesla" && <Tesla />}
      {show === "headlines" && <BusinessHeadlines />}
      {show === "crunch" && <TechCrunch />}
      {show === "wallstreet" && <WallStreet />}
    </>
  );
};

export default App;
