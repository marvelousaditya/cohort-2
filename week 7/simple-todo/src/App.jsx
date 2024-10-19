import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { filterSelector, todoAtom, userInputAtom } from "./store/atom/todo";
// import { title } from "process";

function App() {
  return (
    <div>
      <RecoilRoot>
        <TodoSubmit />
        <DisplayTodo />
        <FilterTodoList />
      </RecoilRoot>
    </div>
  );
}

function TodoSubmit() {
  const setTodo = useSetRecoilState(todoAtom);
  let title = "";
  let description = "";
  return (
    <div>
      <input
        placeholder="title"
        id="title"
        onChange={(e) => (title = e.target.value)}
      ></input>{" "}
      <br></br>
      <br></br>
      <input
        placeholder="description"
        id="description"
        onChange={(e) => (description = e.target.value)}
      ></input>{" "}
      <br></br> <br></br>
      <button
        onClick={() => {
          // console.log(title + " " + description);
          setTodo((todo) => [
            ...todo,
            { title, description, id: Math.random() },
          ]);
        }}
      >
        Submit Todo
      </button>
    </div>
  );
}

function DisplayTodo() {
  // const count = 0;
  const todos = useRecoilValue(todoAtom);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.title}
            <br></br>
            {todo.description}
          </div>
        );
      })}
    </div>
  );
}

function FilterTodoList() {
  const setUserInput = useSetRecoilState(userInputAtom);
  // let filter = "";
  let filteredTodos = [];
  function updateFilter() {
    filteredTodos = useRecoilValue(filterSelector);
  }
  return (
    <div>
      <input
        placeholder="filter todo"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button onClick={updateFilter}>Filter</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
