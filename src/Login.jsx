import React, { useState } from "react";
import "../src/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../src/features/authSlice";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => {
    console.log(state);
    state.auth.loading;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(`${name} : ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    console.log("test");
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      navigate("/");
    } else {
      console.log(result.payload);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        className="border w-50 h-50 border shadow p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="h4 text-center my-1">Login Page</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-100 text-center mt-5">
          <button type="submit" class="btn btn-primary w-100">
            {loading ? (
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <h1 className="h5 fw-normal1 rounded fs-normal mb-0">Submit</h1>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
