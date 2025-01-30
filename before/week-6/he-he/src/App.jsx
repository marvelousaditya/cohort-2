import { useState } from "react";
// import React from "react"; React.memo() or
import React, { memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [title, setTitle] = useState("Little Life");

//   function updateTitle() {
//     setTitle(Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>"click to change the title"</button>
//       <Render title={title} />
//       <Render title="The Alchemist" />
//       <Render title="The Alchemist" />
//       <Render title="The Alchemist" />
//       <Render title="The Alchemist" />
//     </div>
//   );
// }  this is un-optimised , as the whole dom re-renders

//method 2
function App() {
  const [title, setTitle] = useState("Little Life");

  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>"click to change the title"</button>
      <Render title={title} />
      <Render title="The Alchemist" />
      <Render title="The Alchemist" />
      <Render title="The Alchemist" />
      <Render title="The Alchemist" />
    </div>
  );
}

const Render = memo((props) => {
  return <div>{props.title}</div>;
});

/**
 * method 1 to prevent re- rendering , we push down the state
 * 
function App() {
  return (
    <div>
      <HeadWithBtn />
      <Render title="The Alchemist"></Render>
      <Render title="Wings On Fire"></Render>
      <Render title="The Metamorphosis"></Render>
      <Render title="The Kite Runner"></Render>
    </div>
  );
}
 * function HeadWithBtn() {
  const [title, setTitle] = useState("A Little Life");

  function change() {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={change}>Click to change</button>
      <Render title={title}></Render>
    </>
  );
}   

function Render(props) {
  console.log("hi");
  return <div>{props.title}</div>;
}

 */

//method 2

export default App;
