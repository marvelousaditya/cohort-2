import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <div>
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="primary"
        text="check"
        size="sm"
      ></Button>
      <Button variant="secondary" text="check" size="lg"></Button>
      <Button variant="secondary" text="check" size="md"></Button>
    </div>
  );
}

export default App;
