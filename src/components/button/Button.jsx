import React from "react";

export function Button({ children, type, onClick, disabled }) {
  return (
    <>
      <button
        disabled={disabled}
        className="tp-button"
        className={`tp-button tp-button--${type}`}
        onClick={onClick}
      >
        {children}
      </button>
      <style jsx>{`
        .tp-button {
          display: inline-block;
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          background-color: #eee;
          transition: 200ms;
          font-size: 16px;
          cursor: pointer;
        }

        .tp-button[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .tp-button:hover:not([disabled]) {
          box-shadow: 3px 3px 6px #aaa;
          opacity: 0.95;
        }

        .tp-button:active {
          box-shadow: 3px 3px 9px #aaa;
          opacity: 0.85;
        }

        .tp-button--primary {
          color: #fff;
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .tp-button--success {
          color: #fff;
          background-color: #198754;
          border-color: #198754;
        }

        .tp-button--danger {
          color: #fff;
          background-color: #dc3545;
          border-color: #dc3545;
        }
      `}</style>
    </>
  );
}
