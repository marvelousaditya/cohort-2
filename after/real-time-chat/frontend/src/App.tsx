import { useEffect, useRef, useState } from "react";

function App() {
  const messageRef = useRef<HTMLInputElement>();
  const wsRef = useRef();
  const [messages, setMessages] = useState([
    "lots of love : lol",
    "laugh out loud : lol",
  ]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;
    ws.onmessage = (e) => {
      setMessages((m) => [...m, e.data]);
    };

    ws.onopen = () => {
      const obj = {
        type: "join",
        payload: {
          roomId: "red",
        },
      };
      ws.send(JSON.stringify(obj));
    };
    return () => {
      ws.close();
    };
  }, []);

  function sendMessage() {
    const message = messageRef.current?.value;
    const obj = {
      type: "chat",
      payload: {
        message,
      },
    };
    if (!wsRef.current) return;
    wsRef.current.send(JSON.stringify(obj));
  }

  return (
    <div className="h-screen bg-black">
      {" "}
      <br></br> <br></br>
      <div className="h-[85vh]">
        {messages.map((message) => (
          <div className="m-8">
            <span className="bg-white rounded text-black p-4 m-8">
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full bg-white">
        <input type="text" className="p-4 flex-1" ref={messageRef}></input>
        <button className="bg-purple-600 text-white" onClick={sendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
