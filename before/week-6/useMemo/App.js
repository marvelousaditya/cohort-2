import React, { StrictMode, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [input, setInput] = useState(1);
  const [counter, setCounter] = useState(0);

  let count = useMemo(() => {
    console.log("memo");
    let s = 0;
    for (let i = 1; i <= input; i++) s += i;
    return s;
  }, [input]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>{" "}
      <br></br>
      <p>Sum is {count}</p>
      <br></br>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter : {counter}
      </button>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Sum></Sum>
//       <CounterBtn />
//     </div>
//   );
// }

// function Sum() {
//   const [sum, setSum] = useState(0);
//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => {
//           let n = e.target.value;
//           let s = 0;
//           for (let i = 1; i <= n; i++) s += i;
//           setSum(s);
//         }}
//       ></input>{" "}
//       <br></br>
//       <p>Sum is {sum}</p>
//     </div>
//   );
// }

// function CounterBtn() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter : {counter}
//       </button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
