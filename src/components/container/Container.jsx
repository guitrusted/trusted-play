import React from "react";

export function Container({ children }) {
  return (
    <>
      <div className="tp-container">{children}</div>
      <style jsx>{`
        .tp-container {
          margin: 30px;
        }
      `}</style>
    </>
  );
}
