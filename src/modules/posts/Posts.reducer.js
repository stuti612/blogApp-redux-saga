import {
  ADD_POST,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
} from "./Posts.actions";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ADD_POST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case GET_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case GET_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
