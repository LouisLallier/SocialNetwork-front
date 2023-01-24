import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { useAuthContext } from "../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setRefreshToken } = useAuthContext();

  //TODO .env and routes to check
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5002/api/user/login`, {
        email,
        password,
      });
      setRefreshToken(res.data.refreshToken);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
    console.log(email);
  };

  if (isAuth) return <div>Aunthenticated</div>;
  return (
    <div className="flex justify-center pt-48">
      <div className="w-full max-w-xs">
        <form
          className="bg-red-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center pb-3">Log In</div>
          <div className="p-3">
            <label className="pr-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="p-2">
            <label htmlFor="pass">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="*********"
            />
          </div>

          <button className="bg-amber-100 rounded p-2" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
