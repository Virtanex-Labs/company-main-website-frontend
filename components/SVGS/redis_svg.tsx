import * as React from "react";

const RedisSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#DC382D"
      d="M125.7 44.5L67 18.2c-1.9-.8-4.1-.8-6 0L2.3 44.5c-3.1 1.4-3.1 5.6 0 7l26.2 11.7v24.6c0 1.9 1 3.6 2.7 4.5l30 16.5c1.8 1 4 1 5.8 0l29.9-16.5c1.7-.9 2.7-2.6 2.7-4.5V63.2l26.1-11.7c3.1-1.4 3.1-5.6 0-7zM64 28.5l45.4 20.3-17.7 7.9-45.4-20.3L64 28.5zm-3.8 23.3l45.4 20.3-17.7 7.9-45.4-20.3 17.7-7.9z"
    />
  </svg>
);

export default RedisSVG;

