// import styles from "./App.module.css";
// import React from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import { HomePage } from "./Pages/Homepage";
// import RandomColor from "./Pages/RandomColor";

// function App() {
//   return (
//     <HashRouter>
//       <div className={styles.App}>
//         <Routes>
//           <Route
//             exact
//             path="/dipesh-portfolio/#/
//           "
//             element={<HomePage />}
//           />
//           <Route
//             exact
//             path="/dipesh-portfolio/RandomColor/#/"
//             element={<RandomColor />}
//           />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

import styles from "./App.module.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Homepage";
import RandomColor from "./Pages/RandomColor";

function App() {
  return (
    <HashRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/RandomColor" element={<RandomColor />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
