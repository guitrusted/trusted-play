import React from "react";

export function Field({ children, label, required }) {
  return (
    <>
      <div className="tp-field">
        <label>
          {label} {required && <span className="tp-span__required">*</span>}
        </label>
        <div className="tp-field__container">{children}</div>
      </div>
      <style jsx>{`
        .tp-field {
          margin-bottom: 16px;
        }

        .tp-field label {
          font-size: 15px;
        }

        .tp-span__required {
          color: #dd2222;
        }

        .tp-field__container {
          display: flex;
        }
      `}</style>
    </>
  );
}
