import * as React from "react";

const TerraformSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#844FBA"
      d="M48.2 41.6v37.7L15.6 59.9V22.2l32.6 19.4zm3.9 39.8v37.6l32.5-19.3V62L52.1 81.4zm0-79.3v37.6L84.6 20.3 52.1 2.1zm36.4 57.8l32.5-19.3V2.8L88.5 22.1v37.8z"
    />
  </svg>
);

export default TerraformSVG;

