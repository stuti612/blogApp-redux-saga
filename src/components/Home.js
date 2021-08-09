import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, getUsers } from "../modules/posts/Posts.actions";
import "./Home.css";
import Pagination from "./Pagination";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const users = useSelector((state) => state.posts.users);
  console.log(users);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      {posts.loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {posts.length > 0 &&
        currentPosts.map((post) => {
          return (
            <div className="post--card">
              <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
                <div className="post--title">{post.title}</div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`/users/${post.userId}`}
              >
                <p className="username">
                  By: {users.find((user) => user.id === post.userId)?.username}
                </p>
              </Link>
              <div className="post--body">{post.body}</div>
            </div>
          );
        })}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
