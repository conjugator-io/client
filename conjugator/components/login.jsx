import React from "react";

function Login({ touched, errors }) {
    return (
      <Form className="form">
        <h1>Dar Una Buena Acogida</h1>
        <div className="form-box">
          <label className="label">Username</label>
          <Field className="input"
          name="username"
          type="text"
          autoComplete="off"
          />
          <p>{touched.username && errors.username}</p>
        </div>
        <div className="form-box">
          <label className="label">Password</label>
          <Field
            className="input"
            name="password"
            type="password"
            autoComplete="off"
          />
          <p>{touched.password && errors.password}</p>
        </div>
        <button type="submit" className="btn">
          Submit &rarr;
        </button>
      </Form>
    );
  }
       
  export default withFormik({
    mapPropsToValues() {
      return {
        username: "",
        password: ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
      .min(6)
      .required("password is required")
    }),
   
    handleSubmit(values, formikBag) {
      const url = "https://sp-conjugator-be.herokuapp.com";
  
    //   axios 
    //   .post(url,values)
    //   .then(res => {
    //     localStorage.setItem("token", res.data.payload);
    //     formikBag.props.history.push("");
    //   })
    //   .catch(e => {
    //     console.log(e.response);
    //   });
    // }
//   })(Login);
  