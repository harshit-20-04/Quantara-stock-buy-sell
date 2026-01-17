import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="row justify-content-evenly">
      <div className="col-4 mx-5 mt-5 d-flex justify-content-center flex-column">
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className="mt-2">Sign in with Google</h6>
              <img
                style={{ width: "35px" }}
                src="media/images/google.svg"
                alt="google logo"
              ></img>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className=" mt-3">Sign in with Apple</h6>
              <img style={{ width: "35px" }} src="media/images/appl.svg" alt="Apple logo"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container m-5 p-3 px-5 col-5">
        <h2 className="text-center mb-2">Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                class="form-control"
                value={email}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                class="form-control"
                name="password"
                id="inputPassword"
                value={password}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <button className="btn btn-dark mx-5" type="submit">
            Submit
          </button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
