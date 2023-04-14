import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  error: null,
};
export const signUpSlice = createSlice({
  name: "singUp",
  initialState,
  reducers: {
    successSignUp: (state, action) => {
      state.user = action.payload;
    },
    failSignUp: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { successSignUp, failSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
