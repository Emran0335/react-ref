import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const boxref = useRef(null);
  const hi = `It's me`

  useEffect(() => {
    document.addEventListener("click", (e) => {
      boxref.current.style.transform = `translateX(${e.clientX - 50}px)`;
      boxref.current.style.transform += `translateY(${e.clientY - 50}px)`;
    });
  }, []);
  return <div className="box" ref={boxref}>{hi}</div>;
}

export default App;
