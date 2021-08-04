import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../modules/posts/Posts.actions";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Look at all the posts here</h1>
      {posts.loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div>
              <Link to={`/post/${post.id}`}>
                <h1 style={{ color: "red" }}>{post.title}</h1>
              </Link>
              <h4>{post.body}</h4>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
