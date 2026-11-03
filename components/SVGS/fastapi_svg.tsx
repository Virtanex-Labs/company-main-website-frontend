import * as React from "react";

const FastApiSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <circle cx="64" cy="64" r="64" fill="#009688" />
    <path
      fill="#fff"
      d="M70.3 22.8L37.1 66.2h24.7L54.6 105.2l36.3-46.7H66.8l7.5-35.7h-4z"
    />
  </svg>
);

export default FastApiSVG;

