import { useState, useEffect } from "react";
import FormInput from "../input/FormInput";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    try {
      const response = await register({ email, username, password }).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate("/login");
    } catch (error) {
      console.log(error.message);
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
            Register
          </h4>
          <FormInput
            label="username"
            type="text"
            name="username"
            defaultValue={username}
            handleChange={(e) => setUserName(e.target.value)}
          />
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
          <FormInput
            label="confirm password"
            type="password"
            name="comfirm-password"
            defaultValue={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-full flex flex-col mt-5 justify-center items-center">
              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center mt-5">
              Already a member?
              <Link
                to="/login"
                className="ml-2 link link-hover link-primary capitalize text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
