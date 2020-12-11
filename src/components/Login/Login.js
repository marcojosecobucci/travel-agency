import React, { useState } from "react";
import "./login.css";
import logo from "../../img/logo.svg";
import { ApiContext } from "../../ApiContext";
import { Navigate } from "react-router-dom";

const user = { username: "admin", password: "admin" };

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin, login } = React.useContext(ApiContext);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "username") {
      setUsername({ username: value });
    }
    if (name === "password") {
      setPassword({ password: value });
    }
  }

  const checkCredential = (event) => {
    event.preventDefault();
    if (username.username === user.username && password.password === user.password) {
      userLogin();
    }
    else{
      alert("I dati inseriti non sono corretti!\n\nRiprova!");
    }
  };

  if (login === true) return <Navigate to="/homepage" />;
  return (
    <>
      <div className="loginContainer">
        <div className="imgLogin">
          <img src={logo} alt="logo" />
        </div>
        <div className="loginformdiv">
          <form onSubmit={checkCredential} noValidate className="loginform">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username..."
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              onChange={handleChange}
            />
          </form>
          <button type="submit" className="btnLogin" onClick={checkCredential}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
