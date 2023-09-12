import React from "react";
import s from "./Post.module.css";

const Post = (post) => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
          alt="avatar"
        />
        <div>name</div>
      </div>
      <div>{post.message}</div>
      <div>
        <span>Like</span> {post.likesCount}
      </div>
    </div>
  );
};

export default Post;
