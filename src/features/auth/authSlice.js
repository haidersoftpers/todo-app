import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    successLogin: (state, action) => {
      state.user = action.payload;
    },
    failLogin: (state, action) => {
      state.error = action.payload;
    },
    successSignUp: (state, action) => {
      state.user = action.payload;
    },
    failSignUp: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { successLogin, failLogin, successSignUp, failSignUp } =
  authSlice.actions;
export default authSlice.reducer;
