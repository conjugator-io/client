import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
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
  form,
  TopDiv,
  BottomDiv,
  WelcomeBackDiv,
  TopLeft,
  BottomRight,
  Aligator
  // SignUp
} from "../styles/LoginPageStyles";

const SignUp = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);

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
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button>Submit!</button>
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
    name: Yup.string().required("Please Enter A Name"),
    email: Yup.string().required("Please Enter A Valid Email Address"),
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
