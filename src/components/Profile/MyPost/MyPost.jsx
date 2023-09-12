import React from "react";
// import s from "./MyPost.module.css";
import Post from "./Post/Post";
// import Wallpaper from "./Wallpaper/Wallpaper";
import NewPost from "./NewPost/NewPost";

const MyPost = () => {
  return (
    <div>
      <NewPost />
      <Post message="Hi bla bla lba" likesCount="12" />
    </div>
  );
};

export default MyPost;
