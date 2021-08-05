import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../modules/posts/Posts.actions";
import "./AddPost.css";

function AddPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div className="addpost">
      <input
        className="input__title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title..."
      />
      <textarea
        className="input__body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Description..."
        rows="25"
        cols="30"
      />
      <input
        type="submit"
        className="submit--btn"
        onClick={() => {
          dispatch(addPost({ title, body }));
        }}
      />
    </div>
  );
}

export default AddPost;
