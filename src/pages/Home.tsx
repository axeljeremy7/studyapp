import React from "react";
import Topbar from "../components/Topbar";
import { Grid } from "../styles";
import {IPage} from "./index";

const Home = () => {
  return (
    <>
      <Grid justifyContent="center" width='100vw'>
        <Grid fontSize="52px" justifyContent="center" margin='20px 0 16px 0'>
          Help students succeed with smart planning
        </Grid>
        <Grid
          fontSize="28px"
          justifyContent="center"
          color="var(--spanish-grey)"
          margin='0 0 16px 0'
        >
          Simple, intuitive online student-teacher scheduling software app
        </Grid>
        <Grid
          justifyContent="center"
          justifySelf='center'
          color="white"
          cursor="pointer"
          width="90px"
          height="40px"
          fontWeight="bold"
          backgroundColor="var(--green-sheen)"
          borderRadius="4px"
          padding='0 8px 0 8px'
        >
          Try for free!
        </Grid>
      </Grid>
    </>
  );
}

const Page: IPage = {
    routeProps: {
      path: "/home",
      component: Home,
      exact: true
    },
    name: "Why?"
  };
  
export default Page;

