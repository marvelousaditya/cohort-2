// import { CountContext } from "./context";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>{" "}
    </div>
  );
}

function Count() {
  console.log("re-render ");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenOrOdd />
    </div>
  );
}

function Buttons() {
  console.log("re-render");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function EvenOrOdd() {
  const count = useRecoilValue(evenSelector);
  return <div>{count ? "It is Even" : null}</div>;
}

export default App;
