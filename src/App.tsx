import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import axios from "axios";
import Box from "@mui/material/Box";
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
    fetch("https://www.googleapis.com/books/v1/volumes?q=quilting", {
      mode: "cors"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(data);
      })
      .catch((error) => {
        console.log("失敗しました");
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
      <Box
        sx={{
          width: 100,
          height: 300,
          backgroundColor: "red"
        }}
      >
        <p>aaa</p>
      </Box>

      <Box
        sx={{
          width: 100,
          height: 300,
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
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
      </Box>
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
