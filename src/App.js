import { Card } from "@nextui-org/react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Grid } from "@nextui-org/react";
import { Card5 } from "./components/Card/Card5";

export default function App() {
  return (
    <>
      <Header />
      <Grid.Container gap={2} justify="center">
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
    </>
  );
}
