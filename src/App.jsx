import "./App.css";
import { Card } from "./components/card";
import { Container } from "./components/container";
import { CardGroup } from "./components/card-group";
import { GAMES } from "./AppModel";

function App() {
  return (
    <div className="app">
      <Container>
        <h1>Trusted Play</h1>
        <p>
          Hey flock mate, please choose your game and join the hangout meet to
          interact and have fun! 🎮 🎲 🕹
        </p>
        <CardGroup>
          {GAMES.map((game) => (
            <Card
              key={game.title}
              imgUrl={game.imgUrl}
              title={game.title}
              description={game.description}
              gameUrl={game.gameUrl}
              meetUrl={game.meetUrl}
            />
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default App;
