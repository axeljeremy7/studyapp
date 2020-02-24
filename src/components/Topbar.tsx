import React from "react";
import { Grid } from "../styles";
// import { Link as Slink } from "react-scroll";
import { NavLink } from "react-router-dom";
import { pages } from "../pages";
const arr: any = ["Why?", "How it works?", "Pricing", "Log In"];

const Topbar = () => {
  return (
    <Grid
      templateColumns={"150px auto"}
      padding="8px 16px 8px 16px"
      height="60px"
      backgroundColor="var(--cerulean)"
      color="var(--platinum)"
    >
      <Grid fontWeight="bold" fontSize="44px" color="var(--platinum)">
        Study
      </Grid>
      <Grid
        templateColumns={"repeat(5, auto)"}
        justifyContent="flex-end"
        columnGap="16px"
      >
        {pages.map((item: any, index: number) => {
          return (
            <NavLink
              key={index}
              to={item.routeProps.path}
              activeClassName="activeLink"
            >
              <Grid color="var(--platinum)" cursor="pointer">
                {item.name}
              </Grid>
            </NavLink>
          );
        })}

        <Grid
          color="white"
          cursor="pointer"
          height="40px"
          fontWeight="bold"
          backgroundColor="var(--green-sheen)"
          borderRadius="4px"
          padding="0 8px 0 8px"
        >
          Try for free!
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Topbar);
