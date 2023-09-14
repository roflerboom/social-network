import React from "react";
import Post from "./Post/Post";

const MyPost = (props) => {
  debugger;
  const postsElements = props.posts.map((p) => (
    <Post key={p.key} message={p.message} likesCount={p.likesCount} /> //id={p.id}
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    // console.log(text);
    props.addPost(text);
  };

  return (
    <div>
      <div>
        <h3>My post</h3>
        <div>
          <textarea placeholder="Enter text" ref={newPostElement}></textarea>
        </div>
        <div>
          <button type="button" onClick={addPost}>
            Add post
          </button>
        </div>

        {postsElements}
      </div>
    </div>
  );
};

export default MyPost;
