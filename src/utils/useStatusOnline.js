import { useState,useEffect } from "react";

export const useStatusOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return online;
};
