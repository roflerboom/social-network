import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (store) => {
  root.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        apdateNewPostText={store.apdateNewPostText.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

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
