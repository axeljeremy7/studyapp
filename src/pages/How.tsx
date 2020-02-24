import React, { useState } from "react";
import { IPage } from "./index";
import { Grid } from "../styles";
import How1 from "../svg/How1";
import How2 from "../svg/How2";
import How3 from "../svg/How3";
import How4 from "../svg/How4";
import How5 from "../svg/How5";

const How = () => {
  const [stateIndex, setStateIndex] = useState(1);
  return (
    <Grid>
      <Grid
        justifyContent="center"
        templateColumns="repeat(5, auto)"
        margin="20px 0 0 0"
        columnGap="20px"
      >
        <Grid
          justifyContent="center"
          padding="8px"
          borderRadius="4px"
          border="1px solid grey"
          onClick={() => setStateIndex(1)}
        >
          <Grid justifyContent="center">
            <How1 />
          </Grid>

          <Grid>How it works</Grid>
        </Grid>
        <Grid
          justifyContent="center"
          padding="8px"
          borderRadius="4px"
          border="1px solid grey"
          onClick={() => setStateIndex(2)}
        >
          <Grid justifyContent="center">
            <How2 />
          </Grid>
          <Grid>Resource Scheduling</Grid>
        </Grid>
        <Grid
          justifyContent="center"
          padding="8px"
          borderRadius="4px"
          border="1px solid grey"
          onClick={() => setStateIndex(3)}
        >
          <Grid justifyContent="center">
            <How3 />
          </Grid>
          <Grid>Management</Grid>
        </Grid>
        <Grid
          justifyContent="center"
          padding="8px"
          borderRadius="4px"
          border="1px solid grey"
          onClick={() => setStateIndex(4)}
        >
          <Grid justifyContent="center">
            <How4 />
          </Grid>
          <Grid>Multi-Project Planning</Grid>
        </Grid>
        <Grid
          justifyContent="center"
          padding="8px"
          borderRadius="4px"
          border="1px solid grey"
          onClick={() => setStateIndex(5)}
        >
          <Grid justifyContent="center">
            <How5 />
          </Grid>
          <Grid>Forecasting & Reports</Grid>
        </Grid>
      </Grid>
      <Grid display={stateIndex === 1 ? "grid" : "none"}>One</Grid>
      <Grid display={stateIndex === 2 ? "grid" : "none"}>Two</Grid>
      <Grid display={stateIndex === 3 ? "grid" : "none"}>Three</Grid>
      <Grid display={stateIndex === 4 ? "grid" : "none"}>Four</Grid>
      <Grid display={stateIndex === 5 ? "grid" : "none"}>Five</Grid>
    </Grid>
  );
};

const Page: IPage = {
  routeProps: {
    path: "/how",
    component: How,
    exact: true
  },
  name: "How it works?"
};

export default Page;
