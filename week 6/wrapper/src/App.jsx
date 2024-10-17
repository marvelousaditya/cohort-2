/**
 * this is one way of having wrappers
 * but we don't use it
 */

import React, { useEffect } from "react";
import { memo } from "react";
// function App() {
//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent />} />
//     </>
//   );
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }

// function CardWrapper({ innerComponent }) {
//   return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
// }

// method 2

function App() {
  useEffect(() => {
    alert("hi there");
  }, []);
  return (
    <>
      <CardWrapper>hi there</CardWrapper>
    </>
  );
}

const CardWrapper = memo(({ children }) => {
  return <div>{children}</div>;
});

export default App;
