import React from "react";

export function Input({ onChange }) {
  return (
    <>
      <input className="tp-input" onChange={onChange} />
      <style jsx>{`
        .tp-input {
          height: 30px;
          width: 100%;
          border: solid 1px #acacac;
          border-radius: 3px;
          outline: none;
          transition: box-shadow, 0.3s;
          padding: 2px 12px;
          font-size: 16px;
        }

        .tp-input:focus {
          box-shadow: 1px 1px 4px #ccc;
        }
      `}</style>
    </>
  );
}
