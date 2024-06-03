import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

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

  function handleCreateRandomRgbColor() {}

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div>
      {" "}
      <Navbar />
      <div className="contatiner">
        <div className="inner">
          <div
            style={{
              width: "100%",
              height: "400px",
              background: color,
            }}
          >
            <div className="inner-layout">
              <button onClick={() => setTypeOfColor("hex")}>
                Create HEX Color
              </button>
              <button onClick={() => setTypeOfColor("rgb")}>
                Create RGB Color
              </button>
              <button
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
                  fontSize: "60px",
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
      <div>
        <h1>Details</h1>
        <ul>
          <li>learning 1</li>
          <li>learning 2</li>
        </ul>
      </div>
    </div>
  );
};

export default RandomColor;
