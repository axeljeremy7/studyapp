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
      viewBox="0 0 53 49"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke={color}
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path d="M28.386 32c.34 0 .614.448.614 1v6c0 .552-.275 1-.614 1H2.614C2.274 40 2 39.552 2 39v-6c0-.552.275-1 .614-1h25.772zM13.818 17c.653 0 1.182.448 1.182 1v7c0 .552-.53 1-1.182 1H3.182C2.529 26 2 25.552 2 25v-7c0-.552.53-1 1.182-1h10.636zM49.929 17c.591 0 1.071.448 1.071 1v7c0 .552-.48 1-1.071 1H22.07C21.48 26 21 25.552 21 25v-7c0-.552.48-1 1.071-1H49.93zM49.115 2C50.156 2 51 2.448 51 3v7c0 .552-.844 1-1.885 1H3.885C2.844 11 2 10.552 2 10V3c0-.552.844-1 1.885-1h45.23zM37 33l5.302 13.79 3.182-5.304 5.304-3.182zM50.788 46.79l-5.304-5.304"></path>
      </g>{" "}
    </SVG>
  );
};

export default Icon;
