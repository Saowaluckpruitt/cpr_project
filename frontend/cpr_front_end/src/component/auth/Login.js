import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { ErrorContext } from "../../contexts/ErrorContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(userName, password);
      navigate("");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="max-w-7xl mx-auto  bg-py2 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 my-bg">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className=" bg-black opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form
            className="space-y-6"
            action=""
            method="POST"
            onSubmit={handleSubmitLogin}
          >
            <div>
              <label
                htmlFor="Username"
                className="block text-sm font-medium text-lime"
              >
                User name
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="Username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-lime"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ">
              <button
                type="submit"
                className=" w-full mr-2 text-black bg-lime hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
              <Link
                to="/register"
                className="w-full py-3 px-4 text-black text-center bg-lime hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
