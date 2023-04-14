import { call, put, takeEvery } from "redux-saga/effects";
import { successSignUp, successLogin } from "../features/auth/authSlice";
import { LOGIN, SIGNUP } from "../constants/auth";

function* Login({ payload }) {
  yield put(successLogin(payload));
}
function* signUp({ payload }) {
  console.log("krrr");
  yield put(successSignUp(payload));
}

function* watchLogin() {
  yield takeEvery(LOGIN, Login);
}
function* watchSignUp() {
  yield takeEvery(SIGNUP, signUp);
}
export default [watchLogin(), watchSignUp()];
