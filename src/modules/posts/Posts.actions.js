export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const GET_PARTICULAR_POST = "GET_PARTICULAR_POST";
export const GET_PARTICULAR_POST_SUCCESS = "GET_PARTICULAR_POST_SUCCESS";
export const GET_PARTICULAR_POST_FAILED = "GET_PARTICULAR_POST_FAILED";

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILED = "GET_COMMENTS_FAILED";

export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const GET_PARTICULAR_USER = "GET_PARTICULAR_USER";
export const GET_PARTICULAR_USER_SUCCESS = "GET_PARTICULAR_USER_SUCCESS";
export const GET_PARTICULAR_USER_FAILED = "GET_PARTICULAR_USER_FAILED";

export const getPosts = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const getPostsSuccess = (payload) => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFailed = (payload) => ({
  type: GET_POSTS_FAILED,
  payload,
});

export const getParticularPost = (payload) => ({
  type: GET_PARTICULAR_POST,
  payload,
});

export const getParticularPostSuccess = (payload) => ({
  type: GET_PARTICULAR_POST_SUCCESS,
  payload,
});

export const getParticularPostFailed = (payload) => ({
  type: GET_PARTICULAR_POST_FAILED,
  payload,
});

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const addPostSuccess = (payload) => ({
  type: ADD_POST_SUCCESS,
  payload,
});

export const addPostFailed = (payload) => ({
  type: ADD_POST_FAILED,
  payload,
});

export const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload,
});

export const getCommentsSuccess = (payload) => ({
  type: GET_COMMENTS_SUCCESS,
  payload,
});

export const getCommentsFailed = (payload) => ({
  type: GET_COMMENTS_FAILED,
  payload,
});

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload,
});

export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailed = (payload) => ({
  type: GET_USERS_FAILED,
  payload,
});

export const getParticularUser = (payload) => ({
  type: GET_PARTICULAR_USER,
  payload,
});

export const getParticularUserSuccess = (payload) => ({
  type: GET_PARTICULAR_USER_SUCCESS,
  payload,
});

export const getParticularUserFailed = (payload) => ({
  type: GET_PARTICULAR_USER_FAILED,
  payload,
});
