import React from "react";
import { Icon } from "../icon";

export function ExternalLink({ children, url, type }) {
  return (
    <>
      <a
        target="_blank"
        href={url}
        className={`tp-external-link tp-external-link--${type}`}
      >
        {children}
        <Icon iconKey="externalLink" className="tp-external-link__icon" />
      </a>
      <style jsx>{`
        .tp-external-link {
          display: inline-block;
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          background-color: #eee;
          transition: 200ms;
          font-size: 16px;
        }

        .tp-external-link:hover {
          box-shadow: 3px 3px 6px #aaa;
          opacity: 0.95;
        }

        .tp-external-link--primary {
          color: #fff;
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .tp-external-link--success {
          color: #fff;
          background-color: #198754;
          border-color: #198754;
        }

        .tp-external-link__icon {
          width: 16px;
          margin: 0 5px;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
}
