import Home from "./Home";
import How from "./How";
import Pricing from "./Pricing";
import LogIn from "./LogIn";

export interface IPage {
  routeProps: {
    path: string;
    component: React.FC;
    exact?: boolean;
  };
  name: String;
}

const Pages: Array<IPage> = [
    Home, 
    How,
    Pricing,
    LogIn
];

export const pages = [
    Home,
    How,
    Pricing,
    LogIn
  ];

export default Pages;
