import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    successLogin: (state, action) => {
      state.user = action.payload;
    },
    failLogin: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { successLogin, failLogin } = loginSlice.actions;
export default loginSlice.reducer;
