import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  successSignUp,
  successLogin,
  logout,
} from "../features/auth/authSlice";
import { LOGIN, LOGOUT, SIGNUP } from "../constants/auth";

function* Login({ payload }) {
  yield put(successLogin(payload));
}
function* signUp({ payload }) {
  console.log("krrr");
  yield put(successSignUp(payload));
}

function* logoutUser() {
  yield put(logout());
}
function* watchLogin() {
  yield takeEvery(LOGIN, Login);
}
function* watchSignUp() {
  yield takeEvery(SIGNUP, signUp);
}
function* watchLogoutUser() {
  yield takeLatest(LOGOUT, logoutUser);
}
export default [watchLogin(), watchSignUp(), watchLogoutUser()];
