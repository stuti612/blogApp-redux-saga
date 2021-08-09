import {
  takeEvery,
  all,
  call,
  put,
  takeLeading,
  takeLatest,
} from "redux-saga/effects";
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
  GET_PARTICULAR_POST,
  getParticularPostSuccess,
  getParticularPostFailed,
  getParticularUserSuccess,
  getParticularUserFailed,
  GET_PARTICULAR_USER,
  getUsersSuccess,
  getUsersFailed,
  GET_USERS,
} from "./Posts.actions";
import {
  getPosts,
  addPost,
  getPostDetails,
  getParticularPost,
  getParticularUser,
  getUsers,
} from "../../utils/api";

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

function* getParticularPostSaga(action) {
  try {
    const data = yield call(getParticularPost, action.payload.postId); //calling the api function
    yield put(getParticularPostSuccess(data));
  } catch (error) {
    yield put(getParticularPostFailed(error.message));
  }
}

function* getParticularPostWatcher() {
  yield takeEvery(GET_PARTICULAR_POST, getParticularPostSaga);
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

function* getUsersSaga() {
  try {
    const data = yield call(getUsers);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailed(error.message));
  }
}

function* getUsersWatcher() {
  yield takeEvery(GET_USERS, getUsersSaga);
}

function* getParticularUserSaga(action) {
  try {
    const data = yield call(getParticularUser, action.payload.userId);
    yield put(getParticularUserSuccess(data));
  } catch (error) {
    yield put(getParticularUserFailed(error.message));
  }
}

function* getParticularUserWatcher() {
  yield takeEvery(GET_PARTICULAR_USER, getParticularUserSaga);
}

export default function* postsSaga() {
  yield all([
    getPostsWatcher(),
    addPostWatcher(),
    getCommentsWatcher(),
    getParticularPostWatcher(),
    getUsersWatcher(),
    getParticularUserWatcher(),
  ]);
}
