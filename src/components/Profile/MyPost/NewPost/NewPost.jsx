import React from "react";
// import s from "./NewPost.module.css";

const NewPost = () => {
  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <>
      <div>
        <h3>New post</h3>
        <textarea placeholder="Enter text" ref={newPostElement}></textarea>
      </div>
      <div>
        <button type="button" onClick={addPost}>
          Add post
        </button>
      </div>
    </>
  );
};

export default NewPost;
