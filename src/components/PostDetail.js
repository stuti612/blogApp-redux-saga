import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getPosts } from "../modules/posts/Posts.actions";
import "./PostDetail.css";

function PostDetail() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getComments({ postId }));
    // dispatch(getPosts());
  }, []);

  //   function getPostDetails(posts, postId) {
  //     return posts.find((post) => post.id === postId);
  //   }

  const comments = useSelector((state) => state.posts.comments);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  //   const posts = useSelector((state) => state.posts.posts);

  //   const post = getPostDetails(posts, postId);

  return (
    <div className="postDetails">
      <Link className="goBack" to="/">
        See All Posts
      </Link>
      <div className="heading">Comments</div>
      {/* <div>
        <h3>{post.title}</h3>
        <h6>{post.body}</h6>
      </div> */}
      {comments.loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {comments.length > 0 &&
        comments.map((comment) => {
          return (
            <div className="postDetails__comments">
              <div className="comment--name">{comment.name}</div>
              <small className="comment--email">{comment.email}</small>
              <div className="comment--body">{comment.body}</div>
            </div>
          );
        })}
    </div>
  );
}

export default PostDetail;
