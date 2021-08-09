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
  GET_PARTICULAR_POST,
  GET_PARTICULAR_POST_SUCCESS,
  GET_PARTICULAR_POST_FAILED,
  GET_PARTICULAR_USER,
  GET_PARTICULAR_USER_SUCCESS,
  GET_PARTICULAR_USER_FAILED,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "./Posts.actions";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
  comments: [],
  particularPost: [],
  users: [],
  particularUser: [],
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
    case GET_PARTICULAR_POST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PARTICULAR_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        particularPost: action.payload,
      };
    case GET_PARTICULAR_POST_FAILED:
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
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case GET_PARTICULAR_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PARTICULAR_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        particularUser: action.payload,
      };
    case GET_PARTICULAR_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
