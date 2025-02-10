"use client";
import axios from "axios";
import { useRef } from "react";
export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border p-2">
        <input placeholder="username" type="text" ref={usernameRef} />
        <br />
        <input placeholder="password" type="password" ref={passwordRef} />{" "}
        <br />
        <button
          onClick={async () => {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            await axios.post("http://localhost:3000/api/v1/signin", {
              username,
              password,
            });
          }}
        >
          Signin
        </button>
      </div>
    </div>
  );
}
