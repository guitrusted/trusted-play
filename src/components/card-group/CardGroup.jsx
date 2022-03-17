import React from "react";

export function CardGroup({ children }) {
  return (
    <>
      <div className="tp-cards-group">{children}</div>
      <style jsx>{`
        .tp-card-group {
          margin-top: 32px;
        }
      `}</style>
    </>
  );
}
