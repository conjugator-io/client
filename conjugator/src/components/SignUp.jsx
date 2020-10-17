import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Top_left_wave_100_opacity from "../images/Top_left_wave_100_opacity.svg";
import Top_left_save_75_opaque from "../images/Top_left_save_75_opaque.svg";
import Bottom_right_corner_wave_75_opaque from "../images/Bottom_right_corner_wave_75_opaque.svg";
import Bottom_right_wave_100_opacity from "../images/Bottom_right_wave_100_opacity.svg";
import alligator_3312851_960_720 from "../images/alligator_3312851_960_720.svg";
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
  // SignUp
} from "../styles/LoginPageStyles";

const Field = styled.input`
  // *HTML Class* .rectangle

  height: 40px;
  width: 360px;
  background-color: #ffffff;
  border: none;
  font-size: larger;
  padding-left: 5px;
`;

const SignUp = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="user-form">
      <TopDiv>
        <img src={Top_left_wave_100_opacity} alt="" />
        <ConjugatorIo>Conjugator</ConjugatorIo>
        <Aligator src={alligator_3312851_960_720} alt="Aligator" />
        <TopLeft src={Top_left_save_75_opaque}></TopLeft>
      </TopDiv>
      <h1>Sign Up</h1>
      <Form>
        <Email>Email</Email>
        <Field type="text" name="email" placeholder="" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Password>Password</Password>
        <Field type="password" name="password" placeholder="" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Password>Confirm Password</Password>
        <Field type="password" name="password" placeholder="" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Button type="submit">Submit!</Button>
      </Form>
      <BottomDiv>
        <BottomRight src={Bottom_right_corner_wave_75_opaque}></BottomRight>
        <img src={Bottom_right_wave_100_opacity} alt="" />
      </BottomDiv>
    </div>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(4)
      .required("Please Enter A Name"),
    email: Yup.string()
      .min(5)
      .required("Please Enter A Valid Email Address"),
    password: Yup.string()
      .min(6)
      .required("Password Must be at least 6 Characters")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://sp-conjugator-be.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SignUp);

export default FormikSignUp;
