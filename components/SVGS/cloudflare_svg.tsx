import * as React from "react";

const CloudflareSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#F38020"
      d="M93.8 63.6c-.9-7.3-6.4-13.3-13.8-14.8-1.5-.3-3-.4-4.5-.4-12.7 0-23.3 9.3-25.2 21.6-3.7-.8-7.5-.4-10.9 1.1-4.7 2.1-8.1 6.1-9.4 11-.4 1.5-.6 3-.6 4.6 0 .7 0 1.3.1 2h65.4c6.2 0 11.2-5 11.2-11.2 0-6.1-4.9-11.1-11-11.2-.5-.9-.9-1.8-1.3-2.7z"
    />
    <path
      fill="#FAAE40"
      d="M102.5 73.1c-.4-4-2.8-7.5-6.4-9.1.5 2.8.3 5.7-.7 8.3-.9 2.5-2.6 4.7-4.7 6.3h9.6c1.2 0 2.2-.9 2.2-2.1v-3.4z"
    />
  </svg>
);

export default CloudflareSVG;

