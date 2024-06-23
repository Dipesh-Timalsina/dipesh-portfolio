import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";




const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div>
      <div className="layout">
        <div className="topsection">
          <div className="container">
            <div className="inner">
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background: color,
                }}
              >
                <div className="inner-layout">
                  <button
                    className="buttonclass"
                    onClick={() => setTypeOfColor("hex")}
                  >
                    Create HEX Color
                  </button>
                  <button
                    className="buttonclass"
                    onClick={() => setTypeOfColor("rgb")}
                  >
                    Create RGB Color
                  </button>
                  <button
                    className="buttonclass"
                    onClick={
                      typeOfColor === "hex"
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                    }
                  >
                    Generate Random Color
                  </button>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      fontSize: "40px",
                      marginTop: "50px",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                    <h1>{color}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Learned to use the useState hook for managing component state,
              including typeOfColor and color.
            </li>

            <li>
              Developed functions to generate random colors in both HEX
              (handleCreateRandomHexColor) and RGB (handleCreateRandomRgbColor)
              formats
            </li>
            <li>
              Implemented conditional logic within useEffect to generate a color
              based on the typeOfColor state.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
