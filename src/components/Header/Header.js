import React from "react";
import "./Header.css";
import { Button, Grid } from "@nextui-org/react";

export default function Header() {
  return (
    <Grid.Container gap={2} className="header">
      <Grid>
        <Button flat color="primary" auto size="lg">
          Information about Tesla Articles
        </Button>
      </Grid>
      <Grid>
        <Button flat color="secondary" auto size="lg">
          Top business headlines in the US
        </Button>
      </Grid>
      <Grid>
        <Button flat color="success" auto size="lg">
          Top headlines from TechCrunch
        </Button>
      </Grid>
      <Grid>
        <Button flat color="warning" auto size="lg">
          Information about Wall Street Journal
        </Button>
      </Grid>
    </Grid.Container>
  );
}
