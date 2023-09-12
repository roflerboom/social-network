import React from "react";
// import s from "./MyPost.module.css";
import Post from "./Post/Post";
// import Wallpaper from "./Wallpaper/Wallpaper";
import NewPost from "./NewPost/NewPost";

const MyPost = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.key} message={p.message} likesCount={p.likesCount} /> //id={p.id}
  ));

  return (
    <div>
      <NewPost />
      {postsElements}
    </div>
  );
};

export default MyPost;
