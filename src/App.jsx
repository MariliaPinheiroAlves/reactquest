import "./App.css";
import Paragraph from "./components/paragraph";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Paragraph color="orange" textStyle="lowercase">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          cupiditate quibusdam.
        </p>
      </Paragraph>

      <Paragraph>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          cupiditate quibusdam.
        </p>
      </Paragraph>

      <Button label="Clique Aqui" />
      <Button label="Baixar CV" />
    </div>
  );
}

export default App;
