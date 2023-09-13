import React from "react";
// import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = (props) => {
  return (
    <div>
      <Wallpaper />
      <MyPost posts={props.state.postsList} />
    </div>
  );
};

export default Profile;
