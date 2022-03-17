import React from "react";
import ReactRating from "react-rating";
import { Icon } from "../icon";

export function Rating({ initialRating, readonly, size }) {
  const starSize = `${size || 30}px`;

  return (
    <>
      <div className="tp-rating">
        <ReactRating
          initialRating={initialRating}
          readonly={readonly}
          emptySymbol={
            <Icon
              iconKey="starEmpty"
              className="tp-rating__icon"
              style={{ color: "#999", width: starSize, height: starSize }}
            />
          }
          fullSymbol={
            <Icon
              iconKey="starFilled"
              className="tp-rating__icon"
              style={{ color: "#f9d06b", width: starSize, height: starSize }}
            />
          }
        />
      </div>
      <style jsx>{`
        .tp-rating {
          margin-bottom: 16px;
        }

        .tp-rating__icon {
          margin: 0 5px;
        }
      `}</style>
    </>
  );
}
