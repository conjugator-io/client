import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import {
  ConjugatorIo,
  WelcomeBack,
  Email,
  Password,
  Rectangle,
  Button,
  LetsGo,
  Path1,
  Path2,
  Path3,
  Path4
} from "../styles/LoginPageStyles";

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
    <>
      <ConjugatorIo>Conjugator</ConjugatorIo>
      <form onSubmit={handleSubmit}>
        <WelcomeBack>Welcome Back!</WelcomeBack>
        <Email>Email</Email>
        <Rectangle
          type="text"
          name="email"
          placeholder=""
          onChange={handleChange}
          value={props.email}
        />
        <Password>Password</Password>
        <Rectangle
          type="password"
          name="password"
          placeholder=""
          onChange={handleChange}
          value={props.password}
        />
        <Button onSubmit={handleSubmit}>Let's Go!</Button>
      </form>
    </>
  );
};

export default Login;
