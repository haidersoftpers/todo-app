import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "../../../constants/auth";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = () => {
    dispatch({ type: SIGNUP, payload: formData });
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
            <h3 className={"ml-3"}>SignUp</h3>
            <div class="card-body">
              <form action="" autocomplete="off">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    value={formData.name}
                    placeholder="Please enter Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value={formData.email}
                    placeholder="Please enter Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Please enter Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  disabled={formData.email && formData.password ? false : true}
                  onClick={handleSignUp}
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
