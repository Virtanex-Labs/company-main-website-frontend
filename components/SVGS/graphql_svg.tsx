import * as React from "react";

const GraphQlSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#E535AB"
      d="M14.9 36.2l49.1-28.3 49.1 28.3v56.6L64 121.1 14.9 92.8V36.2zm11.5 5.2v46.2l40 23.1 40-23.1V41.4L66.4 18.3 26.4 41.4z"
    />
    <circle cx="64" cy="8.5" r="8.5" fill="#E535AB" />
    <circle cx="112.5" cy="36.5" r="8.5" fill="#E535AB" />
    <circle cx="112.5" cy="92.5" r="8.5" fill="#E535AB" />
    <circle cx="64" cy="120.5" r="8.5" fill="#E535AB" />
    <circle cx="15.5" cy="92.5" r="8.5" fill="#E535AB" />
    <circle cx="15.5" cy="36.5" r="8.5" fill="#E535AB" />
  </svg>
);

export default GraphQlSVG;

