import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../modules/posts/Posts.actions";

function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <h1>Want to add a new post?</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="description"
        rows="10"
        cols="30"
      />
      <button
        onClick={() => {
          dispatch(addPost({ title, body }));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddPost;
