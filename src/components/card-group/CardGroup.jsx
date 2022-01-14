import React from "react";

export function CardGroup({ children }) {
  return (
    <>
      <div className="mx-cards-group">{children}</div>
      <style jsx>{`
        .mx-card-group {
          margin-top: 32px;
        }
      `}</style>
    </>
  );
}
