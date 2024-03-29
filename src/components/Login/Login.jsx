import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false)


  const { singIn } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);

  const froms = location.state?.from?.pathname || '/';

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
        navigate(froms, {replace: true});
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p onClick={()=> setShow(!show)}><small>
                  {
                    show ? <span>hide password</span> : <span>show password</span>
                  }
                  </small></p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
