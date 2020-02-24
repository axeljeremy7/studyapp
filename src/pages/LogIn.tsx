import React from 'react';
import {IPage} from "./index";

const LogIn = () => {
    return (
        <div>
            LogIn
        </div>
    )
}

const Page: IPage = {
    routeProps: {
      path: "/login",
      component: LogIn,
      exact: true
    },
    name: "Log In"
  };
  
  export default Page;
