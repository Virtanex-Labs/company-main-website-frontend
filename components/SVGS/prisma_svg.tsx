import * as React from "react";

const PrismaSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#2D3748"
      d="M109.8 98.4L68.7 13.9c-2-4.1-7.8-4.2-9.9-.2L17.7 97.9c-2.1 4.1 1 9 5.5 8.9l80.9-1.8c4.6-.1 7.7-4.6 5.7-8.6z"
    />
    <path
      fill="#5A67D8"
      d="M62.6 18.2L24.3 97.5l75.4-1.6L62.6 18.2z"
    />
  </svg>
);

export default PrismaSVG;

