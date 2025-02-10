"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
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
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
            router.push("/signin");
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
