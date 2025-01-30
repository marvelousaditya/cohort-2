import { todoAtom, filterAtom, filterSelector } from "./store/atom/todo";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Input />
        <Filter></Filter>
        <DisplayTodo />
      </RecoilRoot>
    </div>
  );
}

function Input() {
  let title = "";
  let description = "";
  const setTodo = useSetRecoilState(todoAtom);
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => (title = e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => (description = e.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = [{ title, description, id: Math.random() }];
          setTodo((todo) => [...todo, ...newTodo]);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

function Filter() {
  const setState = useSetRecoilState(filterAtom);
  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)} />
    </div>
  );
}

function DisplayTodo() {
  const todos = useRecoilValue(filterSelector);
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

export default App;
