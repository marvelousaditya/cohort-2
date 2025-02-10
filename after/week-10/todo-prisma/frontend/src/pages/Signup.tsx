import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import { useNavigate } from "react-router";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post("http://localhost:3000/signup", {
      username,
      password,
    });
    navigate("/signin");
    alert("account created please login");
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
          <Button text={"sign up"} onClick={signup} />
        </div>
      </div>
    </div>
  );
}
