import React, { useEffect, useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtiltiy(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hex[randomColorUtiltiy(hex.length)];
    }

    setColor(hexCode);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtiltiy(256);
    const g = randomColorUtiltiy(256);
    const b = randomColorUtiltiy(256);
    setColor(`rgb(${r} , ${g} , ${b})`);
    setTypeOfColor("rgb");
  }
  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Create Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "200px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
