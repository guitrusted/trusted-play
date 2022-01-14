import React from "react";
import { ExternalLink } from "../external-link";

export function Card({ title, description, imgUrl, meetUrl, gameUrl }) {
  return (
    <>
      <div className="mx-card">
        <div className="mx-card__image">
          <img src={imgUrl} alt={title} />
        </div>
        <header>
          <h2>{title}</h2>
        </header>
        <div className="mx-card__description">{description}</div>
        <nav className="mx-card__nav">
          <ExternalLink url={gameUrl} type="success">
            Game
          </ExternalLink>
          <ExternalLink url={meetUrl} type="primary">
            Meet
          </ExternalLink>
        </nav>
      </div>
      <style jsx>{`
        .mx-card {
          display: inline-block;
          transition: box-shadow 200ms;
          box-shadow: 1px 1px 8px #ddd;
          border-radius: 5px;
          padding: 16px;
          width: 272px;
          margin: 0 32px 32px 0;
        }

        .mx-card:hover {
          box-shadow: 3px 3px 8px #ccc;
        }

        .mx-card__image {
          margin-bottom: 16px;
        }

        .mx-card__image img {
          height: auto;
          border-radius: 5px;
          max-width: 100%;
          min-width: 100%;
        }

        .mx-card__description {
          margin-bottom: 16px;
        }

        .mx-card__nav {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
