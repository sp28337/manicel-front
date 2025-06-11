"use client"

import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth < 768 ? "mobile" : "desktop");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}