import React from "react";

export function DotsVertical({ className, style }) {
  return (
    <>
      <svg
        className={className}
        style={style}
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 29.96 122.88"
      >
        <defs></defs>
        <title>3-vertical-dots</title>
        <path
          class="dots-vertical-cls-1"
          d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
        />
      </svg>
      <style jsx>{`
        svg {
          fill: currentColor;
        }
        .dots-vertical-cls-1 {
          fill-rule: evenodd;
        }
      `}</style>
    </>
  );
}
