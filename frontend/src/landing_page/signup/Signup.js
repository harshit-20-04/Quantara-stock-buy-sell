import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    mobileNumber: "",
  });
  const { email, password, username, mobileNumber } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
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
      email: "",
      password: "",
      username: "",
      mobileNumber: "",
    });
  };

  return (
    <div className="row d-flex justify-content-evenly align-items-center">
      <div className="form-container m-3 px-4 col-6">
        <h2 className="text-center mb-2">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                id="username"
                className="form-control"
                type="text"
                name="username"
                value={username}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                id="inputPassword"
                value={password}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">
              Mobile Number
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
          <button className="btn btn-dark mx-5" type="submit">
            Submit
          </button>
          <span className="input-box">
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>

      <div className="col-4 mx-5 mt-5 d-flex justify-content-center flex-column">
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className="mt-2">Sign in with Google</h6>
              <img
                style={{ width: "35px" }}
                alt='google logo'
                src="media/images/google.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h6 className=" mt-3">Sign in with Apple</h6>
              <img style={{ width: "35px" }} alt="apple logo" src="media/images/appl.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
