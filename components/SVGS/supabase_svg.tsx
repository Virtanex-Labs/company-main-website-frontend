import * as React from "react";

const SupabaseSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 109 113"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      d="M65.4 112.5c-2.4 2.8-7 1.1-7-2.6V71H7.8c-4.4 0-6.8-5-4-8.3L56.5 1.5C59-1.3 63.5.4 63.5 4.1v38.9h50.7c4.4 0 6.8 5 4 8.3L65.4 112.5z"
      fill="url(#supabase-a)"
    />
    <path
      d="M65.4 112.5c-2.4 2.8-7 1.1-7-2.6V71H7.8c-4.4 0-6.8-5-4-8.3L56.5 1.5C59-1.3 63.5.4 63.5 4.1v38.9h50.7c4.4 0 6.8 5 4 8.3L65.4 112.5z"
      fill="url(#supabase-b)"
      fillOpacity=".2"
    />
    <defs>
      <linearGradient
        id="supabase-a"
        x1="57.5"
        y1="0"
        x2="57.5"
        y2="114"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="supabase-b"
        x1="18.5"
        y1="23.5"
        x2="95.5"
        y2="90.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SupabaseSVG;

