import { BrowserRouter, Route, Routes } from "react-router";
import { Signup } from "./pages/Signup";
import { Todo } from "./pages/Todo";
import { Sigin } from "./pages/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Sigin />}></Route>{" "}
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
