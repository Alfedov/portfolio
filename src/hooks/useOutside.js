import { useEffect, useRef, useState } from "react";

export const useOutside = (initialIsVisible) => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);

  const handler = (event) => {
    if (ref.current && !ref.current.contains(event)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  });
  return { ref, isShow, setIsShow };
};