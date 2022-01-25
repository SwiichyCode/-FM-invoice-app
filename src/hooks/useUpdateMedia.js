import { useState, useEffect } from "react";

export default function useUpdateMedia(width) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > width);

  const updateWindow = () => {
    setIsDesktop(window.innerWidth > width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  });

  return isDesktop;
}
