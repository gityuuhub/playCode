import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import axios from "axios";
//import Box from "@material-ui/core/Box";

const App = () => {
  console.log("開始");
  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(true);

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  const onClickAPI = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=quilting", {
        crossDomain: true
      })
      .then(function (response) {
        alert();
      });
  };

  const onClickCount = () => {
    setNum(num + 1);
  };

  const onClickFace = () => {
    setFaceFlag(!faceFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>h1タグ</h1>
      <p style={contentStyle}>Pタグ</p>
      <ColorfulMessage color="blue">こども</ColorfulMessage>
      <ColorfulMessage color="blue">{num}</ColorfulMessage>
      <button onClick={onClickAPI}>GoogleAPI</button>
      <br />
      <button onClick={onClickCount}>カウント</button>
      <br />
      <button onClick={onClickFace}>ON/OFF</button>
      {faceFlag && <p>顔</p>}
    </>
  );
};

export default App;

//API実行メモ
// axiosではCROS対策にサーバ側設定が必要
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*"
// axios.get("https://muro.sakenowa.com/sakenowa-data/api/areas", {"crossDomain": true})
//   .then(function (response) {
//     alert();
//   });

// fetchでも同じ
// fetch('https://muro.sakenowa.com/sakenowa-data/api/areas', {mode: 'cors'})
// .then(response = () => {
//   alert();
// })
