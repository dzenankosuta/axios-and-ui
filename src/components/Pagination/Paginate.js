import React from "react";
import { Pagination, Grid, Radio } from "@nextui-org/react";

const Paginate = () => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Pagination color="primary" total={10} css={{ margin: "auto" }} />
      </Grid>
    </Grid.Container>
  );
};

export default Paginate;
