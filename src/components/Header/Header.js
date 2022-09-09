import React from "react";
import "./Header.css";
import { Button, Grid } from "@nextui-org/react";

export default function Header({
  showTesla,
  showBusinessHeadlines,
  showTechCrunch,
  showWallStreet,
}) {
  return (
    <Grid.Container gap={2} className="header">
      <Grid>
        <Button flat color="primary" auto size="lg" onClick={showTesla}>
          Information about Tesla Articles
        </Button>
      </Grid>
      <Grid>
        <Button
          flat
          color="secondary"
          auto
          size="lg"
          onClick={showBusinessHeadlines}
        >
          Top business headlines in the US
        </Button>
      </Grid>
      <Grid>
        <Button flat color="success" auto size="lg" onClick={showTechCrunch}>
          Top headlines from TechCrunch
        </Button>
      </Grid>
      <Grid>
        <Button flat color="warning" auto size="lg" onClick={showWallStreet}>
          Information about Wall Street Journal
        </Button>
      </Grid>
    </Grid.Container>
  );
}
