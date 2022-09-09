import React from "react";
import { Pagination, Grid, Radio } from "@nextui-org/react";

const Paginate = ({ initialPage, totalPages }) => {
  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Pagination
          color="primary"
          initialPage={initialPage}
          total={totalPages}
          // onPageChange={(page) => console.log({ page })}
          css={{ margin: "auto" }}
        />
      </Grid>
    </Grid.Container>
  );
};

export default Paginate;
