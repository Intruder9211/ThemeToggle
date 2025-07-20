import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "container dark" : "container light"}>
      <h1>Theme Toggle</h1>
      <p>Current Theme : {isDark ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
