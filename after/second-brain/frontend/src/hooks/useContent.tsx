import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [content, setContent] = useState([]);
  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setContent(res.data.content);
      });
  }
  useEffect(() => {
    refresh();
    let intervalId = setInterval(refresh, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return [content, refresh];
}
