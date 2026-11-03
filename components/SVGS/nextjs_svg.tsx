import * as React from "react";

const NextJsSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180 180"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="next-mask"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="180"
      height="180"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" r="90" fill="#000" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.761a90.304 90.304 0 009.509-7.625z"
        fill="url(#next-paint0)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#next-paint1)" />
    </g>
    <defs>
      <linearGradient
        id="next-paint0"
        x1="109"
        y1="116.5"
        x2="144.5"
        y2="160.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="next-paint1"
        x1="121"
        y1="54"
        x2="120.799"
        y2="106.875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default NextJsSVG;

