import React from "react";

export function StarEmpty({ className, style }) {
  return (
    <>
      <svg
        className={className}
        style={style}
        version="1.1"
        width="90"
        height="90"
        viewBox="0 0 90 90"
      >
        <defs></defs>
        <path d="M 19.817 88.005 c -0.879 0 -1.752 -0.275 -2.498 -0.818 c -1.321 -0.959 -1.97 -2.555 -1.694 -4.165 l 4.315 -25.161 c 0.072 -0.419 -0.067 -0.846 -0.371 -1.143 L 1.289 38.899 c -1.169 -1.14 -1.582 -2.812 -1.077 -4.365 c 0.505 -1.553 1.822 -2.663 3.437 -2.898 l 25.263 -3.671 c 0.421 -0.061 0.784 -0.325 0.972 -0.707 L 41.182 4.367 C 41.905 2.903 43.367 1.994 45 1.994 c 1.633 0 3.096 0.909 3.818 2.373 L 60.116 27.26 c 0.188 0.382 0.551 0.645 0.972 0.707 l 25.264 3.671 c 1.616 0.235 2.932 1.345 3.436 2.898 c 0.504 1.553 0.092 3.225 -1.078 4.365 L 70.43 56.718 c -0.304 0.297 -0.443 0.723 -0.371 1.143 l 4.315 25.161 c 0.275 1.61 -0.374 3.206 -1.694 4.165 c -1.32 0.961 -3.038 1.085 -4.484 0.325 l -22.596 -11.88 c -0.376 -0.199 -0.825 -0.198 -1.201 -0.001 L 21.803 87.511 C 21.174 87.841 20.494 88.005 19.817 88.005 z M 45 72.516 c 0.68 0 1.361 0.163 1.982 0.489 l 22.596 11.88 c 0.64 0.341 1.165 0.044 1.359 -0.098 c 0.195 -0.142 0.636 -0.549 0.514 -1.263 l -4.315 -25.16 c -0.237 -1.382 0.22 -2.791 1.225 -3.77 l 18.28 -17.819 c 0.519 -0.506 0.402 -1.094 0.326 -1.323 c -0.074 -0.229 -0.325 -0.774 -1.041 -0.878 l -25.264 -3.671 c -1.388 -0.202 -2.586 -1.073 -3.206 -2.33 L 46.158 5.681 c -0.321 -0.65 -0.917 -0.72 -1.158 -0.72 c -0.241 0 -0.837 0.07 -1.157 0.719 L 32.545 28.573 c -0.621 1.257 -1.819 2.127 -3.206 2.329 L 4.075 34.573 c -0.717 0.104 -0.967 0.649 -1.042 0.878 c -0.074 0.23 -0.192 0.818 0.326 1.323 L 21.64 54.594 c 1.004 0.978 1.462 2.388 1.225 3.77 L 18.55 83.524 c -0.123 0.714 0.318 1.12 0.513 1.262 c 0.196 0.142 0.718 0.436 1.359 0.099 l 22.597 -11.881 C 43.639 72.679 44.32 72.516 45 72.516 z" />
      </svg>
      <style jsx>{`
        svg {
          fill: currentColor;
        }
      `}</style>
    </>
  );
}