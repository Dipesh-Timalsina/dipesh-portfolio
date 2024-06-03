
import styles from './App.module.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Homepage";
import RandomColor from './Pages/RandomColor';

function App() {
  return (

    <Router>
      <div className={styles.App}>
        <Routes>
          <Route  exact path="/dipesh-portfolio/" element={<HomePage />} />
          <Route  exact path="/dipesh-portfolio/RandomColor" element={<RandomColor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

