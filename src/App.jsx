import "./App.css";
import { Card } from "./components/card";
import { Container } from "./components/container";
import { CardGroup } from "./components/card-group";

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
          <Card
            imgUrl="https://user-images.githubusercontent.com/89046766/149423374-f166a167-3459-46ed-a92c-5d9d81734b7e.png"
            title="Gartic"
            description="Draw and guess what your mates are drawing."
            gameUrl="https://gartic.io/"
            meetUrl="https://meet.google.com/vko-ucdq-bty"
          />
          <Card
            imgUrl="https://user-images.githubusercontent.com/89046766/149423374-f166a167-3459-46ed-a92c-5d9d81734b7e.png"
            title="Gartic"
            description="Draw and guess what your mates are drawing."
            gameUrl="https://gartic.io/"
            meetUrl="https://meet.google.com/vko-ucdq-bty"
          />
          <Card
            imgUrl="https://user-images.githubusercontent.com/89046766/149423374-f166a167-3459-46ed-a92c-5d9d81734b7e.png"
            title="Gartic"
            description="Draw and guess what your mates are drawing."
            gameUrl="https://gartic.io/"
            meetUrl="https://meet.google.com/vko-ucdq-bty"
          />
          <Card
            imgUrl="https://user-images.githubusercontent.com/89046766/149423374-f166a167-3459-46ed-a92c-5d9d81734b7e.png"
            title="Gartic"
            description="Draw and guess what your mates are drawing."
            gameUrl="https://gartic.io/"
            meetUrl="https://meet.google.com/vko-ucdq-bty"
          />
        </CardGroup>
      </Container>
    </div>
  );
}

export default App;
