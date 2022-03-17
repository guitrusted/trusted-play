import React from "react";

export function Drawer({ children, title, footer, isVisible, onClose }) {
  return (
    <>
      <aside className={`tp-drawer ${!isVisible && "tp-drawer--hidden"}`}>
        <button className="tp-drawer__close-button" onClick={onClose}>
          &times;
        </button>
        <header>
          <h2>{title}</h2>
        </header>
        <main>{children}</main>
        <footer className="tp-drawer__footer">{footer}</footer>
      </aside>
      <div
        className={`tp-drawer__overlay ${!isVisible && "tp-drawer--hidden"}`}
        onClick={onClose}
      ></div>
      <style jsx>{`
        :root {
          --width: 350px;
          --gutter: 32px;
        }

        .tp-drawer {
          position: fixed;
          padding: var(--gutter);
          top: 0;
          right: 0;
          width: var(--width);
          height: 100vh;
          background-color: #fff;
          z-index: 101;
        }

        .tp-drawer--hidden {
          display: none;
        }

        .tp-drawer__close-button {
          border: none;
          background: transparent;
          padding: 4px 8px;
          position: absolute;
          top: calc(var(--gutter) - 8px);
          right: 15px;
          font-size: 32px;
          cursor: pointer;
        }

        .tp-drawer__footer {
          width: var(--width);
          position: absolute;
          bottom: 96px;
        }

        .tp-drawer__overlay {
          position: fixed;
          top: 0;
          left: 0;
          background-color: #000;
          opacity: 50%;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: 100;
        }
      `}</style>
    </>
  );
}
