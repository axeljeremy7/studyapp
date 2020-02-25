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
      viewBox="0 0 49 47"
    >
      <g fill="none" fill-rule="evenodd" stroke={color} stroke-linejoin="round" stroke-width="3"><path d="M2 45h45M12.5 33h-6A1.5 1.5 0 0 0 5 34.5V45h9V34.5a1.5 1.5 0 0 0-1.5-1.5zM27.5 18h-6a1.5 1.5 0 0 0-1.5 1.5V45h9V19.5a1.5 1.5 0 0 0-1.5-1.5zM42.5 27h-6a1.5 1.5 0 0 0-1.5 1.5V45h9V28.5a1.5 1.5 0 0 0-1.5-1.5zM5 18.5a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zM18.5 2a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zM44 9.5a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zM6.9 19.178l9.7-11.856M41.122 11.652L21.378 5.846"></path></g>
    </SVG>
  );
};

export default Icon;