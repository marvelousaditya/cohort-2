import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        size="sm"
        onClick={() => console.log(1)}
        text="hi"
      />
      ;
    </div>
  );
}

export default App;
