import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [todo, setTodo] = useState([]);
  //   const [counter, setCounter] = useState(1);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //     setTimeout(() => {
    //       setCounter(counter + 1);
    //     }, 9000);
    setInterval(async () => {
      const data = await fetch("http://localhost:8080/todos");
      const json = await data.json();
      //     console.log(json);
      setTodo(json.todos);
    }, 10000);
  };

  return (
    <div>
      <DisplayTodo todo={todo} />
    </div>
  );
}

function DisplayTodo({ todo }) {
  return (
    <div>
      {todo.map((t) => {
        return (
          <div key={t.id}>
            <h1>{t.title}</h1>
            <h2>{t.description}</h2>
          </div>
        );
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
