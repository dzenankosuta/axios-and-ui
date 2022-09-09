import React from "react";
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
  return (
    <>
      <Header />
      {/* <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card5 />
        </Grid>
      </Grid.Container> */}
      <Tesla />
      {/* <BusinessHeadlines /> */}
      {/* <TechCrunch /> */}
      {/* <WallStreet /> */}
    </>
  );
};

export default App;
