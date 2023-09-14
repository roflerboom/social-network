import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import state, { addPost, apdateNewPostText, subscribe } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        apdateNewPostText={apdateNewPostText}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// let renderEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         addPost={addPost}
//         apdateNewPostText={apdateNewPostText}
//       />
//     </React.StrictMode>
//   );
// };

// export default renderEntireTree;
