import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [id, setId] = useState(1);
  //   function change(i) {
  //     setId(i);
  //   }
  return (
    <div>
      <button
        onClick={() => {
          setId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setId(4);
        }}
      >
        4
      </button>

      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todo?id=" + id).then(async (res) => {
      const data = await res.json();
      setTodos(data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todos.title}</h1>
      <h2>{todos.description}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
