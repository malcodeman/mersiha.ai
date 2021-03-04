import React from "react";

import { iconProps } from "../types";

function Instagram(props: iconProps): React.ReactElement {
  const { size = 32, color = "currentColor", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      enable-background="new 0 0 32 32"
      xmlSpace="preserve"
    >
      <ellipse fill={color} cx="16" cy="16" rx="3.1" ry="3.1" />
      <path
        fill={color}
        d="M19.6,12.9h2.2c0.2,0,0.4-0.2,0.4-0.4v-2.2c0-0.2-0.2-0.4-0.4-0.4h-2.2c-0.2,0-0.4,0.2-0.4,0.4v2.2
	C19.1,12.7,19.3,12.9,19.6,12.9z"
      />
      <path
        fill={color}
        d="M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16s16-7.2,16-16C32,7.2,24.8,0,16,0z M24,22.1c0,1-0.9,1.9-1.9,1.9
	H9.9C8.9,24,8,23.2,8,22.1V9.9C8,8.8,8.9,8,9.9,8h12.2C23.1,8,24,8.8,24,9.9V22.1z"
      />
      <path
        fill={color}
        d="M20.9,16c0,2.7-2.2,4.9-4.9,4.9c-2.7,0-4.9-2.2-4.9-4.9c0-0.4,0.1-0.9,0.2-1.3H9.8v7c0,0.2,0.2,0.4,0.4,0.4
	h11.5c0.2,0,0.4-0.2,0.4-0.4v-7h-1.5C20.8,15.1,20.9,15.6,20.9,16z"
      />
    </svg>
  );
}

export default Instagram;
