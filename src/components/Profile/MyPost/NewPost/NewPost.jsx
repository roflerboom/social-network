import React from "react";
// import s from "./NewPost.module.css";

const NewPost = () => {
  return (
    <>
      <div>
        <h3>New post</h3>
        <textarea placeholder="Enter text"></textarea>
      </div>
      <div>
        <button type="button">Public</button>
      </div>
    </>
  );
};

export default NewPost;
