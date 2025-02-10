import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router";
import axios from "axios";

export function Sigin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const res = await axios.post("http://localhost:3000/signin", {
      username,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/todo");
  }
  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className=" bg-gray-200 rounded-sm border-4 border-black shadow-sm shadow-amber-700">
        <div>
          <Input placeholder={"username"} reference={usernameRef} />
        </div>
        <div>
          <Input placeholder={"password"} reference={passwordRef} />
        </div>
        <div className="flex justify-center">
          <Button text={"sign in"} onClick={signin} />
        </div>
      </div>
    </div>
  );
}
