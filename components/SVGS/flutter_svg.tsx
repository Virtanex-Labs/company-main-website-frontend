import * as React from "react";

const FlutterSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#47C5FB"
      d="M78.6 15.6L20.8 73.4l18.5 18.5 76.3-76.3H78.6zm0 46.2L49.1 91.3l29.5 29.5h37L71.8 76.9l16.3-15.1h-9.5z"
    />
    <path
      fill="#0B569E"
      d="M78.6 120.8l37-37h-37l-18.5 18.5 18.5 18.5z"
    />
  </svg>
);

export default FlutterSVG;

