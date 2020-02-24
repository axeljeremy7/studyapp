import React from "react";
import { ISVG, SVG } from "./index";

const Icon: React.FC<ISVG> = ({
  width = "32px",
  height = "32px",
  color = "#1A90DC"
}) => {
  return (

    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      enable-background="new 0 0 384 384"
      version="1.1"
      viewBox="0 0 62 54"
    >
      <g fill="none" fill-rule="evenodd" stroke={color} stroke-linejoin="round" stroke-width="3"><path d="M50.5 5.954V2M43.68 6.944l-1.978-1.978M57.522 6.944L59.5 4.966M50.352 11.444a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM54.852 24.944L60 30.092M4.55 19.944h32"></path><path d="M51 34.738v13.765c0 1.9-1.43 3.441-3.196 3.441H5.196C3.43 51.944 2 50.404 2 48.503V16.385c0-1.9 1.43-3.441 3.196-3.441h32.489"></path></g>
    </SVG>
  );
};

export default Icon;