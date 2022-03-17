import { useState, useEffect } from "react";
import { Card } from "./components/card";
import { Container } from "./components/container";
import { CardGroup } from "./components/card-group";
import { AddButton } from "./components/add-button";
import { Button } from "./components/button";
import { Drawer } from "./components/drawer";
import { Input } from "./components/input";
import { Field } from "./components/field";
import { GAMES } from "./AppModel";
import { signIn } from "./services/authenticationHandler";
import { postGame, getGames, removeGame } from "./services/firebaseHandler";
import "./App.css";

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [shouldShowAddGameForm, setShouldShowAddGameForm] = useState(false);
  const [formModel, setFormModel] = useState({});

  function fetchGames() {
    getGames((games) => {
      console.log("fetched games", games);
      if (!games) return;

      setGamesList(Object.values(games));
    });
  }

  useEffect(() => fetchGames(), []);

  function setField(field, e) {
    const newModel = {
      ...formModel,
      [field]: e.target.value,
    };
    setFormModel(newModel);
  }

  function isFormValid() {
    return (
      formModel.name &&
      formModel.shortDescription &&
      formModel.imageUrl &&
      formModel.gameUrl &&
      formModel.meetUrl
    );
  }

  function closeDrawer() {
    setFormModel({});
    setShouldShowAddGameForm(false);
  }

  function onDeleteGame(id) {
    removeGame(id, fetchGames);
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
            />
          ))}
        </CardGroup>
      </Container>
      <Drawer
        isVisible={shouldShowAddGameForm}
        title="Add a new game"
        footer={
          <Button
            type="primary"
            disabled={!isFormValid()}
            onClick={() => {
              postGame(formModel, () => {
                fetchGames();
                closeDrawer();
              });
            }}
          >
            Just save it
          </Button>
        }
        onClose={closeDrawer}
      >
        <form>
          <Field label="Name" required>
            <Input
              value={formModel.name}
              onChange={(e) => setField("name", e)}
            />
          </Field>
          <Field label="Description" required>
            <Input
              value={formModel.shortDescription}
              onChange={(e) => setField("shortDescription", e)}
            />
          </Field>
          <Field label="Image URL" required>
            <Input
              value={formModel.imageUrl}
              onChange={(e) => setField("imageUrl", e)}
            />
          </Field>
          <Field label="Game URL" required>
            <Input
              value={formModel.gameUrl}
              onChange={(e) => setField("gameUrl", e)}
            />
          </Field>
          <Field label="Meet URL" required>
            <Input
              value={formModel.meetUrl}
              onChange={(e) => setField("meetUrl", e)}
            />
          </Field>
        </form>
      </Drawer>
    </div>
  );
}

export default App;
