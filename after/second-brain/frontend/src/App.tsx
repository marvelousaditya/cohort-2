import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button
        startIcon={<PlusIcon size="sm" />}
        variant="primary"
        text="check"
        size="sm"
        endIcon={<ShareIcon size="sm" />}
      ></Button>
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="primary"
        text="check"
        size="md"
        endIcon={<ShareIcon size="md" />}
      ></Button>
      <Button
        startIcon={<PlusIcon size="lg" />}
        variant="primary"
        text="check"
        size="lg"
        endIcon={<ShareIcon size="lg" />}
      ></Button>
    </div>
  );
}

export default App;
