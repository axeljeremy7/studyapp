import React from 'react';
import {IPage} from "./index";

const Pricing = () => {
    return (
        <div>
            Pricing
        </div>
    )
}

const Page: IPage = {
    routeProps: {
      path: "/pricing",
      component: Pricing,
      exact: true
    },
    name: "Pricing"
  };
  
  export default Page;
