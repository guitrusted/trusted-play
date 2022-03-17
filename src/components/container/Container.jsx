import React from "react";

export function Container({ children }) {
  return (
    <>
      <div className="tp-container">{children}</div>
      <style jsx>{`
        .tp-container {
          max-width: 1010px;
          margin: 32px auto;
        }
      `}</style>
    </>
  );
}
