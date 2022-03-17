import React from "react";
import { Icon } from "../icon";
import { Button } from "../button";

export function AddButton({ children, ...props }) {
  return (
    <>
      <Button className={`tp-add-button`} {...props}>
        <Icon iconKey="plus" className="tp-add-button__icon" />
        {children}
      </Button>
      <style jsx>{`
        .tp-external-link {
          display: inline-block;
          padding: 10px 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          background-color: #eee;
          transition: 200ms;
          font-size: 16px;
        }

        .tp-add-button__icon {
          width: 16px;
          margin: 0 5px;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
}
