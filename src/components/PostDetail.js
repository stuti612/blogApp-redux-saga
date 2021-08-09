import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getParticularPost,
  getParticularUser,
} from "../modules/posts/Posts.actions";
import "./PostDetail.css";

function PostDetail() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const posts = useSelector((state) => state.posts);
  const { particularPost, comments, loading, error, particularUser } = posts;
  const { userId } = particularPost;

  useEffect(() => {
    dispatch(getParticularPost({ postId }));
    dispatch(getComments({ postId }));
  }, []);

  useEffect(() => {
    dispatch(getParticularUser({ userId }));
  }, [userId]);

  return (
    <div className="postDetails">
      <Link className="goBack" to="/">
        See All Posts
      </Link>
      <div className="post">
        <h3 className="post--title">{particularPost.title}</h3>
        <Link
          style={{ textDecoration: "none" }}
          to={`/users/${particularPost.userId}`}
        >
          <p className="post--username">@{particularUser.username}</p>
        </Link>
        <h6 className="post--body">{particularPost.body}</h6>
        <div className="heading">Comments</div>
      </div>
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
