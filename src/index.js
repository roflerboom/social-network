import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let postsList = [
  { key: 1, message: "Привет, Машенька", likesCount: 12 },
  { key: 2, message: "Привет, Мишенька", likesCount: 1213 },
  { key: 3, message: "Привет, Мишенька", likesCount: 1213 },
  { key: 4, message: "Привет, Мишенька", likesCount: 1213 },
];
let dialogsList = [
  { key: 1, name: "Misha" },
  { key: 2, name: "Masha" },
];

let messagesList = [
  { key: 1, message: "Привет, Машенька" },
  { key: 2, message: "Привет, милый. Как же я тебя люблю!" },
  { key: 3, message: "Привет, милый. Как же я тебя люблю!" },
];

root.render(
  <React.StrictMode>
    <App
      postsList={postsList}
      dialogsList={dialogsList}
      messagesList={messagesList}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
