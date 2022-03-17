import React, { useState } from "react";
import { ExternalLink } from "../external-link";
import { Button } from "../button";
import { Rating } from "../rating";
import { Icon } from "../icon";

export function Card({
  title,
  description,
  imgUrl,
  meetUrl,
  gameUrl,
  id,
  onDeleteGame = () => {},
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function removeHandler() {
    const shouldRemove = confirm("Are you sure to delete this game?");
    if (shouldRemove) {
      onDeleteGame(id);
    }
  }

  return (
    <>
      <div className={`tp-card ${isFlipped && "tp-card--flipped"}`}>
        <div className="tp-card__front-side">
          <div className="tp-card__image" onClick={() => setIsFlipped(true)}>
            <img src={imgUrl} alt={title} />
            <div className="tp-card__front-side-rating">
              <Rating initialRating={3} readonly size={20} />
            </div>
          </div>
          <header className="tp-card-header">
            <h2>{title}</h2>
            <div>
              <button
                className="tp-card-header__options-button"
                onClick={() => setIsFlipped(true)}
              >
                <Icon iconKey="dotsVertical" style={{ width: "4px" }} />
              </button>
            </div>
          </header>
          <div className="tp-card__description">{description}</div>
          <nav className="tp-card__nav">
            <ExternalLink url={meetUrl} type="success">
              Meet
            </ExternalLink>
            <ExternalLink url={gameUrl} type="primary">
              Play
            </ExternalLink>
          </nav>
        </div>
        <div className="tp-card__back-side">
          <header>
            <h2>{title}</h2>
            <p>Feel free to rate it.</p>
          </header>
          <main>
            <div className="text-align--center">
              <Rating />
            </div>
          </main>
          <footer>
            <Button onClick={() => setIsFlipped(false)}>&larr; Back</Button>
            <Button type="danger" onClick={() => removeHandler()}>
              Remove
            </Button>
            <Button onClick={() => alert("Ops! It's not ready yet. :)")}>
              <Icon
                iconKey="edit"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "4px",
                }}
              />
              Edit
            </Button>
          </footer>
        </div>
      </div>
      <style jsx>{`
        :root {
          --tp-card-width: 272px;
        }

        .tp-card {
          display: inline-block;
          position: relative;
          transition: box-shadow 200ms;
          box-shadow: 1px 1px 8px #ddd;
          border-radius: 5px;
          padding: 16px;
          width: var(--tp-card-width);
          margin: 0 32px 32px 0;
          overflow: hidden;
        }

        .tp-card:hover {
          box-shadow: 3px 3px 8px #ccc;
        }

        .tp-card__image {
          margin-bottom: 16px;
          cursor: pointer;
        }

        .tp-card__image img {
          height: 160px;
          border-radius: 5px;
          max-width: 100%;
          min-width: 100%;
        }

        .tp-card__description {
          margin-bottom: 16px;
        }

        .tp-card__nav {
          display: flex;
          justify-content: space-between;
        }

        .tp-card-header {
          position: relative;
          display: flex;
          justify-content: space-between;
        }

        .tp-card-header__options-button {
          padding: 8px 6px;
          cursor: pointer;
          outline: none;
          border: none;
          background-color: transparent;
        }

        .tp-card--flipped .tp-card__front-side {
          opacity: 0;
          visibility: hidden;
        }

        .tp-card__back-side footer {
          display: flex;
          justify-content: space-between;
        }

        .tp-card__back-side {
          position: absolute;
          top: 16px;
          left: 500px;
          width: var(--tp-card-width);
          /* transition: left 0.8s; */
        }

        .tp-card__back-side main {
          padding: 32px 0;
        }

        .tp-card--flipped .tp-card__back-side {
          left: 16px;
        }

        .tp-card__front-side-rating {
          position: absolute;
          top: 24px;
          left: 24px;
        }

        .tp-card__front-side-rating > .tp-rating {
          background: rgba(0, 0, 0, 0.65);
          border-radius: 5px;
          padding: 2px 0 0 0;
        }
      `}</style>
    </>
  );
}
