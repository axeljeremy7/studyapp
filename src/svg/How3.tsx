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
      <g fill="none" fill-rule="evenodd" stroke={color} stroke-linejoin="round" stroke-width="3"><path d="M12.448 26a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 1 1 0-10.5zM20.902 44a8.948 8.948 0 0 0-16.898 0M19.502 21H5c-1.656 0-3-1.344-3-3V5c0-1.656 1.344-3 3-3h16.502M31 17l3 3 7.5-6M36.552 30a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 1 1 0-10.5zM28.102 48A8.948 8.948 0 0 1 45 48"></path><path d="M28.8 25h15.4c1.546 0 2.8-1.344 2.8-3V10c0-1.656-1.254-3-2.8-3H28.8C27.254 7 26 8.344 26 10v12c0 1.656 1.254 3 2.8 3zM16 15L9 8M9 15l7-7"></path></g>
    </SVG>
  );
};

export default Icon;