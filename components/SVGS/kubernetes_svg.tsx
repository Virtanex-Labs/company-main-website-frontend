import * as React from "react";

const KubernetesSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="#326CE5"
      d="M64 4.5l52.6 30.4v60.8L64 126.1 11.4 95.7V34.9L64 4.5zm0 10.7L19.9 39.9v48.2L64 112.8l44.1-24.7V39.9L64 15.2zm0 16.9a32 32 0 110 64 32 32 0 010-64zm0 8.2a23.8 23.8 0 100 47.6 23.8 23.8 0 000-47.6z"
    />
    <path
      fill="#fff"
      d="M64 43.8a20.2 20.2 0 110 40.4 20.2 20.2 0 010-40.4zm0 6.1a14.1 14.1 0 100 28.2 14.1 14.1 0 000-28.2z"
    />
  </svg>
);

export default KubernetesSVG;

