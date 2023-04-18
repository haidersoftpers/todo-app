import authReducer, { successLogin, successSignUp, logout } from "./authSlice";

const initialState = {
  user: null,
};
describe("auth module test", () => {
  test("login test", () => {
    const { user } = authReducer(
      initialState,
      successLogin({ email: "test@gmail.com", password: "12345" })
    );
    console.log("login user", user);
    expect(user).not.toBeNull();
  });
  test("sign up test", () => {
    const { user } = authReducer(
      initialState,
      successSignUp({
        name: "test",
        email: "test@gmail.com",
        password: "12345",
      })
    );
    expect(user).not.toBeNull();
  });
  test("logout test", () => {
    const { user } = authReducer(
      { user: { email: "test@gmail.com", password: 12345 } },
      logout()
    );
    expect(user).toBeNull();
  });
});
