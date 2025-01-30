import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   function onClickHandler() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   );
// }

function App() {
  const [todos, setTodos] = useState([
    { title: "study", description: "at 9", completed: false },
    {
      title: "gym",
      description: "at 10",
      completed: true,
    },
  ]);
  
  function addTodo() {
    const todo = {
      title: "new todo",
      description: "add desc",
      completed: false,
    };

    setTodos([...todos, todo]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

// component
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}
export default App;
