import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const Login = props => {
  // Get the token from local storage.
  const token = localStorage.getItem("token");
  const [creds, setCreds] = useState({
    email: "",
    passowrd: ""
  });

  if (token) {
    // If token existed we redirect the user to the home page.
    return <Redirect to="/" />;
  }

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Axios.post("https://sp-conjugator-be.herokuapp.com/api/auth/login", creds)
      .then(res => {
        // Saving the token to local storage.
        localStorage.setItem("token", res.data.token);
        console.log("%c Token has been saved, re-routing...", "color: green;");
        props.history.push("TO BE DECIDED");
      })
      .catch(error => {
        console.log(
          "%c Error ",
          "color: red; font-size: 15px; background: black;",
          error
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Welcome Back!</h4>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={props.email}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={props.password}
      />
      <button onSubmit={handleSubmit}>Login</button>
    </form>
  );
};

export default Login;