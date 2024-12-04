import { useEffect, useState } from "react";

export function useIsOnline() {
  const [isOnline, setOnline] = useState(window.navigator.onLine);
  const handleOnline = () => {
    setOnline(true);
  };
  const handleOffline = () => {
    setOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
