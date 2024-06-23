import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";


export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToogleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <>
      <div className="layout">
        <div className="topsection">
          <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
              <p>Hello World !</p>
              <button onClick={handleToogleTheme}>Change Theme</button>
            </div>
          </div>
        </div>
        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Utilized a custom hook (useLocalStorage) to manage state with
              persistence in local storage.
            </li>

            <li>
              Implemented a function handleToogleTheme to switch between light
              and dark themes by updating the theme state.
            </li>
            <li>
              Used console.log to debug and monitor the current theme state
              during development.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
