import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Top_left_wave_100_opacity from "../images/Top_left_wave_100_opacity.svg";
import Top_left_save_75_opaque from "../images/Top_left_save_75_opaque.svg";
import Bottom_right_corner_wave_75_opaque from "../images/Bottom_right_corner_wave_75_opaque.svg";
import Bottom_right_wave_100_opacity from "../images/Bottom_right_wave_100_opacity.svg";
import alligator_3312851_960_720 from "../images/alligator_3312851_960_720.svg";
import { Redirect } from "react-router-dom";
import {
  ConjugatorIo,
  WelcomeBack,
  Email,
  Password,
  Rectangle,
  Button,
  Form,
  TopDiv,
  BottomDiv,
  WelcomeBackDiv,
  TopLeft,
  BottomRight,
  Aligator
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
    return <Redirect to="/home" />;
  }

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("https://sp-conjugator-be.herokuapp.com/api/auth/login", creds)
      .then(res => {
        // Saving the token to local storage.
        localStorage.setItem("token", res.data.token);
        console.log("%c Token has been saved, re-routing...", "color: green;");
        props.history.push("/home");
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
      <TopDiv>
        <img src={Top_left_wave_100_opacity} alt="" />
        <ConjugatorIo>Conjugator</ConjugatorIo>
        <Aligator src={alligator_3312851_960_720} alt="Aligator" />
        <TopLeft src={Top_left_save_75_opaque}></TopLeft>
      </TopDiv>
      {/* <h1>Cong</h1> */}

      <WelcomeBackDiv>
        <WelcomeBack>Welcome Back!</WelcomeBack>
      </WelcomeBackDiv>
      <Form onSubmit={handleSubmit}>
        <Email>Email</Email>
        <Rectangle
          type="text"
          name="email"
          placeholder=""
          autoComplete="off"
          onChange={handleChange}
          value={props.email}
        />
        <Password>Password</Password>
        <Rectangle
          type="password"
          name="password"
          placeholder=""
          autoComplete="off"
          onChange={handleChange}
          value={props.password}
        />
        <Button onSubmit={handleSubmit}>Let's Go!</Button>
      </Form>
      <BottomDiv>
        <BottomRight src={Bottom_right_corner_wave_75_opaque}></BottomRight>
        <img src={Bottom_right_wave_100_opacity} alt="" />
      </BottomDiv>
    </>
  );
};

export default Login;
