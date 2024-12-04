import { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useInterval } from "./hooks/useInterval";
import SearchBar from "./SearchBar";

function App() {
  const isOnline = useIsOnline();
  const mousePointer = useMousePointer();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return (
    <div>
      {isOnline ? <div>You Are Online</div> : <div>You are Offline</div>}
      <br></br>
      <div>{mousePointer.x}</div> <div>{mousePointer.y}</div>
      <br></br>
      <div>Timer is at {count}</div>
      <SearchBar />
    </div>
  );
}

export default App;
