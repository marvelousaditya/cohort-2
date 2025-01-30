import { StrictMode, useState, memo, useCallback } from "react";

import ReactDOM from "react-dom/client";
function App() {
  const [count, setCount] = useState(0);
  //      function logSomething() {
  //     console.log("hello");
  //   }
  const logSomething = useCallback(() => {
    console.log("hello");
  }, []);
  
  return (
    <div>
      <BtnComponent inputFn={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count = {count}
      </button>
    </div>
  );
}

const BtnComponent = memo(({ inputFn }) => {
  console.log("Child Renderer");
  return (
    <div>
      <button onClick={inputFn}>Click Me</button>
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
