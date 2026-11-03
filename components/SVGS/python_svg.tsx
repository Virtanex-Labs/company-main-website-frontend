import * as React from "react";

const PythonSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="url(#python-a)"
      d="M63.7 3.5c-15.9 0-29.6 1.8-29.6 14.8v10.9h30.2v4.4H22.7C9.8 33.6 0 43.8 0 63.8c0 17.6 9 30.2 24.6 30.2h8.3V82.4c0-11.8 10.3-21.8 22.4-21.8h30.1c9.9 0 17.9-8.4 17.9-18.4V18.3C103.3 5.3 89.6 3.5 63.7 3.5zm-16 9.3c3.6 0 6.6 3 6.6 6.6 0 3.7-3 6.6-6.6 6.6-3.7 0-6.6-3-6.6-6.6 0-3.6 3-6.6 6.6-6.6z"
    />
    <path
      fill="url(#python-b)"
      d="M64.3 124.5c15.9 0 29.6-1.8 29.6-14.8V98.8H63.7v-4.4h41.6c12.9 0 22.7-10.2 22.7-30.2 0-17.6-9-30.2-24.6-30.2h-8.3v11.6c0 11.8-10.3 21.8-22.4 21.8H42.6c-9.9 0-17.9 8.4-17.9 18.4v23.9c0 13 13.7 14.8 39.6 14.8zm16-9.3c-3.6 0-6.6-3-6.6-6.6 0-3.7 3-6.6 6.6-6.6 3.7 0 6.6 3 6.6 6.6 0 3.6-2.9 6.6-6.6 6.6z"
    />
    <defs>
      <linearGradient
        id="python-a"
        x1="18.2"
        y1="10.8"
        x2="85.4"
        y2="76.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="python-b"
        x1="109.8"
        y1="117.2"
        x2="42.6"
        y2="51.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
  </svg>
);

export default PythonSVG;

