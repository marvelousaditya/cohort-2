import { useEffect, useState, useRef } from "react";

function App() {
  const [socket, setSocket] = useState();
  const messageRef = useRef<HTMLInputElement>();
  function sendMessage() {
    if (!socket) return;
    const message = messageRef.current?.value;
    //@ts-ignore
    socket.send(message);
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data.toString());
    };
  }, []);
  return (
    <div>
      <input placeholder="Message..." type="text" ref={messageRef}></input>
      <button onClick={sendMessage}>Send </button>
    </div>
  );
}

export default App;
