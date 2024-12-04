import { useEffect, useState } from "react";

export function useMousePointer() {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePointer({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePointer;
}
