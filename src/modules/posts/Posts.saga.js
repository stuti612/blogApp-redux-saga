import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import {
  GET_POSTS,
  getPostsSuccess,
  getPostsFailed,
  ADD_POST,
  addPostSuccess,
  addPostFailed,
  GET_COMMENTS,
  getCommentsSuccess,
  getCommentsFailed,
} from "./Posts.actions";
import { getPosts, addPost, getPostDetails } from "../../utils/api";

function* getPostsSaga() {
  try {
    const data = yield call(getPosts);
    //   console.log(data);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

function* getPostsWatcher() {
  yield takeEvery(GET_POSTS, getPostsSaga);
}

function* addPostsSaga(action) {
  try {
    const data = yield call(addPost, action.payload);
    yield put(addPostSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addPostFailed(error.message));
  }
}

function* addPostWatcher() {
  yield takeLeading(ADD_POST, addPostsSaga);
}

function* getCommentsSaga(action) {
  try {
    const data = yield call(getPostDetails, action.payload.postId);
    yield put(getCommentsSuccess(data));
  } catch (error) {
    yield put(getCommentsFailed(error.message));
  }
}

function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS, getCommentsSaga);
}

export default function* postsSaga() {
  yield all([getPostsWatcher(), addPostWatcher(), getCommentsWatcher()]);
}
