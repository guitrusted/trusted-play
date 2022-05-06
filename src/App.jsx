import { useState, useEffect } from "react";
import { Card } from "./components/card";
import { Container } from "./components/container";
import { CardGroup } from "./components/card-group";
import { AddButton } from "./components/add-button";
import { signIn } from "./services/authenticationHandler";
import { GameFormDrawer } from "./modules/gameFormDrawer/GameFormDrawer";
import { getGames, removeGame } from "./services/firebaseHandler";
import "./App.css";

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [shouldShowAddGameForm, setShouldShowAddGameForm] = useState(false);

  function fetchGames() {
    getGames((games) => {
      if (!games) return;

      setGamesList(Object.values(games));
    });
  }

  useEffect(() => fetchGames(), []);

  function onDeleteGame(id) {
    removeGame(id, fetchGames);
  }

  function onEditGame(id) {
    const game = gamesList.find((game) => game.id === id);

    setFormModel(game);
    setShouldShowAddGameForm(true);
  }

  signIn();

  return (
    <div className="app">
      <Container>
        <h1>Trusted Play</h1>
        <p>
          Hey flock mate, please choose your game and join the hangout meet to
          interact and have fun! 🎮 🎲 🕹
        </p>
        <div className="text-align--right margin-bottom--md">
          <AddButton onClick={() => setShouldShowAddGameForm(true)}>
            Add game
          </AddButton>
        </div>
        <CardGroup>
          {gamesList.map((game) => (
            <Card
              key={game.id}
              id={game.id}
              imgUrl={game.imageUrl}
              title={game.name}
              description={game.shortDescription}
              gameUrl={game.gameUrl}
              meetUrl={game.meetUrl}
              onDeleteGame={onDeleteGame}
              onEditGame={onEditGame}
            />
          ))}
        </CardGroup>
      </Container>
      <GameFormDrawer isVisible={shouldShowAddGameForm} />
    </div>
  );
}

export default App;
