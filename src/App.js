import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/addpost">
          <button>Add Post</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
