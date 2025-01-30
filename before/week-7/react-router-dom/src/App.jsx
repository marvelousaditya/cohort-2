import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
// import Landing from "./Components/Landing";
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Landing = React.lazy(() => import("./Components/Landing"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"Loading..."}>
              <Dashboard />{" "}
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading..."}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
{
  // function Appbar() {
  // const navigate = useNavigate();
  // return (
  // <div>
  // {
  /* <button */
  // }
  // onClick={() => {
  // window.location.href = "";
  // navigate("/");
  // }}
  // >
  // {
  /* Lading Page */
  // }
  // {
  // /* </button>{" "} */
  // }
  // {
  /* <br></br> */
  // }
  // {
  /* <button */
  // }
  // onClick={() => {
  // window.location.href = "/dashboard";
  // navigate("/dashboard");
  // }}
  // >
  // {
  /* Dashboard Page */
  // }
  // {
  /* </button>{" "} */
  // }
  // {
  /* <br></br> */
  // }
  // {
  /* </div> */
  // }
  // );
  // }
}
export default App;
