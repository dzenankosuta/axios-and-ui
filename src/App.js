import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Grid } from "@nextui-org/react";
import Card5 from "./components/Card/Card5";
import Paginate from "./components/Pagination/Paginate";
import Tesla from "./components/Axios/Tesla";

const App = () => {
  return (
    <>
      <Header />
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card5 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card5 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card5 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card5 />
        </Grid>
        <Grid xs={12} sm={4}></Grid>
      </Grid.Container>
      <Tesla />
      <Paginate />
    </>
  );
};

export default App;
