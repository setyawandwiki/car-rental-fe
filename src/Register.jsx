import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./features/authSlice";

const Register = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [isScuess, setIsSuccess] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const dispatch = useDispatch();

  const loading = useSelector((state) => {
    state.auth.loading;
  });

  const error = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    const result = await dispatch(register({ email, password }));
    if (register.fulfilled.match(result)) {
      setIsSuccess(true);
      setIsClick(true);
    } else if (register.rejected.match(result)) {
      setIsClick(true);
      setIsSuccess(false);
      console.log(result.payload);
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
        {isClick ? (
          !isScuess ? (
            <div className="bg-danger fw-normal fs-normal text-center p-2 rounded text-white">
              {error}
            </div>
          ) : (
            <div className="bg-success fw-normal fs-normal text-center p-2 rounded text-white">
              Register Success !
            </div>
          )
        ) : (
          <></>
        )}

        <h1 className="h4 text-center my-1">Register Page</h1>
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

export default Register;
