import { useEffect, useState } from "react";
// import axios from "axios";

interface TODOS {
  id?: number;
  title: string; // import axios from "axios";
  description: string;
  completed?: boolean;
}

function App() {
  const [todos, setTodos] = useState<TODOS[]>([]);
  useEffect(() => {
    // axios.get("http://localhost:3000/todos").then((res) => {
    //   setTodos(res.data.todos);
    //   setIsLoading(false);
    // });
    setTodos([
      {
        id: 1,
        title: "Complete TypeScript Project",
        description: "Work on the frontend and backend",
        completed: false,
      },
      {
        id: 2,
        title: "Read React Documentation",
        description: "Focus on hooks and context",
        completed: true,
      },
    ]);
  }, []);
  return (
    <>
      {todos.map((todo) => (
        <RenderTodo key={todo.id} todo={todo} />
      ))}
      <Display title="hehe boiii" description="wala wala" />
    </>
  );
}
function Display(props: TODOS) {
  return <div>{props.title}</div>;
}
function RenderTodo({ todo }: { todo: TODOS }) {
  return (
    <div>
      {todo.title}
      <br></br> {todo.description}{" "}
    </div>
  );
}

export default App;
