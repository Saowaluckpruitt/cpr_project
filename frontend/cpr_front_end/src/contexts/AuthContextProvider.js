import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

import { getToken, clearToken, setToken } from "../service/localStorageService";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      const token = getToken();
      if (!token) {
        navigate("/login");
      }
      const resMe = await axios.get("/users/me");
      setUser(resMe.data.user);
    };

    fetchMe();
  }, []);

  const register = async (input) => {
    const res = await axios.post("/register", input);
    setToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
  };

  const login = async (userName, password) => {
    const res = await axios.post("/login", { userName, password });
    setToken(res.data.token);
    const resMe = await axios.get("/users/me");
    setUser(resMe.data.user);
  };

  const logout = () => {
    clearToken();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ register, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
