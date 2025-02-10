"use client";
import axios from "axios";
import { useRef } from "react";
export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function setItems() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await axios.post("http://localhost:3000/api/signin", {
      username,
      password,
    });
    localStorage.setItem("token", res.data.token);
  }

  return (
    <div>
      <input placeholder="username" type="text" ref={usernameRef} />
      <input placeholder="password" type="password" ref={passwordRef} />
      <button onClick={setItems}>SignIn</button>
    </div>
  );
}
