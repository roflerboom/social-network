import React from "react";
// import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import Wallpaper from "./Wallpaper/Wallpaper";

// const Profile = (props) => {
//   debugger;
//   return (
//     <div>
//       <Wallpaper />

//       <MyPost posts={props.state.postsList} addPost={() => props.addPost} />
//     </div>
const Profile = (props) => {
  // debugger;
  return (
    <div>
      <Wallpaper />

      <MyPost posts={props.state.postsList} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
