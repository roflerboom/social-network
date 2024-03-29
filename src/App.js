import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";

// function App({ state, addPost }) {
function App({ state, addPost, apdateNewPostText }) {
  // debugger;
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={state.profilePage}
                addPost={addPost}
                apdateNewPostText={apdateNewPostText}
              />
            }
          />

          <Route
            path="/dialogs/*"
            element={<Dialogs state={state.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
