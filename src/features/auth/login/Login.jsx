import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../../constants/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch({ type: LOGIN, payload: { email: email, password: password } });
    navigate("/");
  };
  return (
    <div class="container">
      <div
        class="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div class="col-4">
          <div class="card">
            <h3 className={"ml-3"}>Login</h3>
            <div class="card-body">
              <form action="" autocomplete="off">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={email}
                    placeholder="Please enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Please enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  disabled={email && password ? false : true}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <Link to="/signup" className="ml-3">
                  SignUp
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
