import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import { useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__name">Saaspect</div>
        <div className="navbar__btn">
          <Link to="/">
            <button className="btn btn--home">Home</button>
          </Link>
          <Link to="/addpost">
            <button className="btn btn--post">Add Post</button>
          </Link>
        </div>
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
