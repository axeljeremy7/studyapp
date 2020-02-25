import React, { useState } from "react";
import { IPage } from "./index";
import { Grid } from "../styles";
import HowBox from "./Home/HowBox";

const arr = [1, 2, 3, 4, 5];

const How = () => {
  const [stateIndex, setStateIndex] = useState(1);
  return (
    <Grid>
      <Grid
        justifyContent="center"
        templateColumns="repeat(5, auto)"
        margin="20px 0 0 0"
        columnGap="20px"
        padding="20px"
      >
        {arr.map((item, index)=><HowBox key={index} stateIndex={stateIndex} setStateIndex={setStateIndex} widthIcon='80px' heightIcon ='80px' index={item}/>)}

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
