import React from "react";
// import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import Wallpaper from "./Wallpaper/Wallpaper";

const Profile = () => {
  return (
    <div>
      <Wallpaper />
      <MyPost />
    </div>
  );
};

export default Profile;
