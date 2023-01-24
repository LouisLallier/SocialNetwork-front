import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
const Auth = () => {
  const [currentForm, setCurrentForm] = useState("login");

  return <div>{currentForm === "login" ? <Login /> : <Register />}</div>;
};

export default Auth;
