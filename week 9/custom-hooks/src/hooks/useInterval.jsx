import { useEffect } from "react";

export function useInterval(cfn, n) {
  // console.log("hi");
  useEffect(() => {
    // console.log("bye /");
    const id = setInterval(cfn, n);
    return () => {
      clearInterval(id);
    };
  }, []);
}
