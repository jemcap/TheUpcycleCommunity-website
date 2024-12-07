import React, { useEffect, useState } from "react";
import FormInput from "../input/FormInput";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../slices/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...response }));
      console.log("Login successful", response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="grid place-items-center h-screen">
      <div class="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 rounded-xl">
        <Link to="/" className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </Link>
        <form onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold capitalize mb-5">
            login
          </h4>

          <FormInput
            label="email"
            type="email"
            name="email"
            defaultValue={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            defaultValue={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-full flex flex-col mt-5 justify-center items-center">
              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 bold">
                {error.data?.message ||
                  "An error occurred. Please try again later."}
              </p>
            )}
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
            <p className="text-center mt-5">
              Not a member yet?
              <Link
                to="/register"
                className="ml-2 link link-hover link-primary capitalize text-blue-500"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
