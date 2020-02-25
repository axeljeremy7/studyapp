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
      <g fill="none" fill-rule="evenodd" stroke={color} stroke-linejoin="round" stroke-width="3"><path d="M3 2h52a1 1 0 0 1 1 1v39a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path><path stroke-linecap="round" d="M9 8.5h25.5M43.5 8.5h6M9 22.5h21.5M43.5 22.5h6M9 36.5h24.5M43.5 36.5h6M2 15.5h54M2 29.5h54"></path></g>
    </SVG>
  );
};

export default Icon;
