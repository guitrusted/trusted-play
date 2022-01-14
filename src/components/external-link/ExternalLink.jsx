import React from "react";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

export function ExternalLink({ children, url, type }) {
  return (
    <>
      <a
        target="_blank"
        href={url}
        className={`mx-external-link mx-external-link--${type}`}
      >
        {children}
        <ExternalLinkIcon className="mx-external-link__icon" />
      </a>
      <style jsx>{`
        .mx-external-link {
          display: inline-block;
          padding: 12px 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          background-color: #eee;
          transition: 200ms;
        }

        .mx-external-link:hover {
          box-shadow: 3px 3px 6px #aaa;
          opacity: 0.95;
        }

        .mx-external-link__img {
          color: inherit;
        }

        .mx-external-link--primary {
          color: #fff;
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .mx-external-link--success {
          color: #fff;
          background-color: #198754;
          border-color: #198754;
        }

        .mx-external-link__icon {
          width: 20px;
          margin: 0 5px;
          vertical-align: sub;
        }
      `}</style>
    </>
  );
}
