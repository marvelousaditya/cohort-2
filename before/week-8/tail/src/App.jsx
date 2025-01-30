function App() {
  return (
    <div>
      <Flex /> <br></br>
      <br></br>
      {/* <UnequalGrid /> */}
      {/* <br></br> <br></br>
      <EqualGrid /> */}
    </div>
  );
}

function EqualGrid() {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-red-500">first</div>
      <div className="bg-blue-500">second</div>
      <div className="bg-pink-500">third</div>
    </div>
  );
}
function UnequalGrid() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-4 bg-red-500">first</div>
      <div className="col-span-4 bg-blue-500">second</div>
      <div className="col-span-2 bg-pink-500">third</div>
    </div>
  );
}

function Flex() {
  return (
    <div className="block md:flex">
      <div className="bg-red-500">first</div>
      <div className="bg-blue-500">second</div>
      <div className="bg-pink-500">third</div>
    </div>
  );
}

export default App;
