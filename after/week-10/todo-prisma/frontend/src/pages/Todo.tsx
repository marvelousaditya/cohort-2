import { Display } from "../components/Display";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
export function Todo() {
  const [todos, setTodos] = useState([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      axios
        .get("http://localhost:3000/todo", {
          headers: { auth: localStorage.getItem("token") },
        })
        .then((res) => {
          setTodos(res.data.result);
          console.log(res.data.result);
        });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  async function createTodo() {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    await axios.post(
      "http://localhost:3000/todo",
      { title, description },
      { headers: { auth: localStorage.getItem("token") } }
    );
  }

  return (
    <div>
      <div className="bg-gray-200 rounded-sm border-4 border-black shadow-sm shadow-amber-700">
        <Input placeholder={"title"} reference={titleRef} />
        <Input placeholder={"description"} reference={descriptionRef} />
        <Button onClick={createTodo} text="Create Todo" />
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Display type="primary" text={todo.title} />
              <Display type="secondary" text={todo.description} />
              <Button
                text={todo.done ? "DONE" : "MARK AS DONE"}
                onClick={async () => {
                  console.log("doing");
                  const res = await axios.put(
                    `http://localhost:3000/todo`,
                    {
                      id: todo.id,
                    },
                    {
                      headers: { auth: localStorage.getItem("token") },
                    }
                  );
                  console.log(res);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
