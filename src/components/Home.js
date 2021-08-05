import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../modules/posts/Posts.actions";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="home">
      {posts.loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className="post--card">
              <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
                <div className="post--title">{post.title}</div>
              </Link>
              <div className="post--body">{post.body}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
