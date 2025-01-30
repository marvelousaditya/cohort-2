function App() {
  return (
    <div className="">
      <div className="border-solid border-2 border-black">
        <div className="">
          <div className="bg-blue-400 h-40"></div>
          <center>
            {" "}
            <img
              className="h-24 w-24 rounded-full -m-14"
              src="https://shorturl.at/7bCEq"
              alt=""
            />
          </center>
          <div className="pt-16">
            <div className="flex justify-center">
              <div className="font-semibold">Aditya Singh</div>
              <div className="pl-2 text-gray-400">21</div>
            </div>
            <div className="pl-2 text-gray-400 flex justify-center">Delhi</div>
          </div>
        </div>
        <div className="border-solid border-2 border-black font-semibold">
          <div className="flex justify-around">
            <div>80K</div>
            <div>803K</div>
            <div>1.4K</div>
          </div>
          <div className="flex justify-around text-gray-400">
            <div>Followers</div>
            <div>Likes</div>
            <div>Photos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
