/**
 * todos = [{
 *    title: "",
 *    description: ""
 * }]
 */

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.complete == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
