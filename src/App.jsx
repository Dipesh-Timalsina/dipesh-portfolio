

import styles from "./App.module.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Homepage";
import RandomColor from "./Pages/RandomColor";
import ImageSlider from "./Pages/ImageSlider";
import TreeView from "./Pages/tree-view";
import StarRating from "./Pages/star-rating";
import Accordian from "./Pages/Accordian/accordian";
import LightDarkMode from "./Pages/light-dark-mode";
import menus from "./Pages/tree-view/data";
import CustomTabTest from "./Pages/CustomTabs/customTabTest";
import ModalTest from "./Pages/CustomModel/modaltest";
import GithubProfileFinder from "./Pages/GitHubProfileFinder";

import SearchAutocomplete from "./Pages/searchautocomplete";




function App() {
  return (
    <HashRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/RandomColor" element={<RandomColor />} />

          <Route
            path="/ImageSlider"
            element={<ImageSlider url={"https://picsum.photos/v2/list"} />}
          />

          <Route path="/TreeView" element={<TreeView menus={menus} />} />
          <Route path="/StarRating" element={<StarRating />} />
          <Route path="/Accordian" element={<Accordian />} />
          <Route path="/LightDarkMode" element={<LightDarkMode />} />
          <Route path="/CustomTab" element={<CustomTabTest />} />
          <Route path="/CustomModel" element={<ModalTest />} />
          <Route path="/SearchAutocomplete" element={<SearchAutocomplete />} />
          <Route
            path="/GitHubProfileFinder"
            element={<GithubProfileFinder />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
