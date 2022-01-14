import React from "react";

export function Container({ children }) {
  return (
    <>
      <div className="mx-container">{children}</div>
      <style jsx>{`
        .mx-container {
          margin: 30px;
        }
      `}</style>
    </>
  );
}
