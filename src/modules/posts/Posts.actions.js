export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILED = "GET_COMMENTS_FAILED";

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
