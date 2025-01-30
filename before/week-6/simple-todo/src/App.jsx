import { memo, useState } from "react";
import "./App.css";

let counter = 4;
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "at 7 pm",
    },
    {
      id: 2,
      title: "solve dsa question",
      description: "3 questions",
    },
    {
      id: 3,
      title: "practice guitar",
      description: "from 3 to 4 pm",
    },
  ]);
  return (
    <>
      <Todo todo={todo} setTodo={setTodo}></Todo>
      <DisplayTodo props={todo} />
    </>
  );
}

function Todo({ todo, setTodo }) {
  let obj = [{ id: counter++ }];
  return (
    <>
      <input
        type="text"
        id="title"
        onChange={(e) => (obj[0].title = e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        id="description"
        onChange={(e) => (obj[0].description = e.target.value)}
      />{" "}
      <br />
      <button
        onClick={() => {
          const newTodo = [...todo, ...obj];
          setTodo(newTodo);
        }}
      >
        Add Todo
      </button>
    </>
  );
}
const DisplayTodo = memo(({ props }) => {
  return (
    <div>
      {" "}
      {props.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        );
      })}
    </div>
  );
});

export default App;
