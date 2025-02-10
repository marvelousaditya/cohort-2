"use client";
import axios from "axios";

import { useEffect, useState } from "react";
export default function Profile() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile", {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => setMessage(res.data.msg));
  });

  return <div>{message}</div>;
}
