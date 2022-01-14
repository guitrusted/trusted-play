import React from "react";

export function ExternalLinkIcon({ className }) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h7v2H5v14h14v-7h2v7C21,20.1,20.1,21,19,21z" />
        <path d="M21 10L19 10 19 5 14 5 14 3 21 3z" />
        <path
          d="M6.7 8.5H22.3V10.5H6.7z"
          transform="rotate(-45.001 14.5 9.5)"
        />
      </svg>
      <style jsx>{`
        svg {
          fill: currentColor;
        }
      `}</style>
    </>
  );
}
