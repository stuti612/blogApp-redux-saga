import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getParticularUser } from "../modules/posts/Posts.actions";
import "./UserDetail.css";

function UserDetail() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const posts = useSelector((state) => state.posts);
  const { particularUser, loading, error } = posts;

  useEffect(() => {
    dispatch(getParticularUser({ userId }));
  }, []);

  return (
    <div className="userDetails">
      {particularUser.loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      <div className="userDetails__name">Name: {particularUser.name}</div>
      <div className="userDetails__name">
        Username: {particularUser.username}
      </div>
      <div className="userDetails__name">email: {particularUser.email}</div>
      <div className="userDetails__name">Phone no.: {particularUser.phone}</div>
      <div className="userDetails__name">Website: {particularUser.website}</div>
      <div className="userDetails__name">
        Company: {particularUser.company.name}
      </div>
      <div className="userDetails__name">
        City: {particularUser.address.city}
      </div>
    </div>
  );
}

export default UserDetail;
