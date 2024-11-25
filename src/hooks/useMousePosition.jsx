import React, { useEffect, useState } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: null, y: null });

  function updatePostion(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    window.addEventListener("mousemove", updatePostion);

    return () => window.removeEventListener("mousemove", updatePostion);
  }, []);

  return position;
}
