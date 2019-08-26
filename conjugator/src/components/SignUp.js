import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const SignUp = ({ errors, touched, values, status}) => {

    const [user, setUser] = useState([]);

    useEffect( () => {
        if (status) {
            setUser([...user, status]);
        }
    }, [status]);

    return (
        <div className='user-form'>
            <h1>Sign Up</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />

                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field type="text" name="email" placeholder="Email" />

                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}

                <Field type="password" name="password" placeholder="Password" />

                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <Field component="select" className="level-select" name="level">
                    <option>Please Choose a level</option>
                    <option value="1">Novice</option>
                    <option value="2">Competent</option>
                    <option value="3">Proficient</option>
                    <option value="4">Expert</option>
                </Field>
                <button>Submit!</button>
            </Form>

            {user.map(u => (
                <ul className={u.level} key={u.id}>
                <li>Name: {u.name} </li>
                <li>Email: {u.email} </li>
                <li>level: {u.level} </li>
                </ul>
            ))}

        </div>
    )
}

  const FormikSignUp = withFormik({

    mapPropsToValues({ name, email, password, level}) {
      return {
        name: name || "",
        email: email || "",
        password: password || "",
        level: level || "",
      };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Enter A Name"),
        email: Yup.string()
            .required("Please Enter A Valid Email Address"),
        password: Yup.string().min(6).required("Password Must be at least 6 Characters")

      }),
  
    handleSubmit(values, { setStatus }) {

    axios
      .post('', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }

  })(SignUp);
  
  export default FormikSignUp;