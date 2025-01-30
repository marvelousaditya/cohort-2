import { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const divRef = useRef();

  useEffect(() =>  {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000);
  }, []); 

  const incomeTax = 20000;

  return (
    <div>
      income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
