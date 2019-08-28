import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import Loader from '../components/Loader'
import Facebook from "../components/FacebookLogin"

export default class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        show: true,
        validated: false,
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        signUpMessage: '',
        isLoading: false,
    };
  }

    handleClose = () => {
        this.props.onHide();
    }

    handleFormSwitch = () => {
        this.props.onHide();
        this.props.isLogin();
    }


    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleValidation = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        this.setState({
            validated: true,
            isLoading: true
        });      

        axios({
            // POST registration information
            method: 'POST',
            url: 'https://sp-conjugator-be.herokuapp.com/api/auth/register',
            data: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }
        })
        .then(response => {

            // Success
            this.setState({
                signUpMessage: 'Thank You registering with us! Please login to Begin.',
                isLoading: false
            });

            window.alert(this.state.signUpMessage);

            this.props.onHide();
            this.props.isLogin();
            
        })
        .catch(error => {

            // Failure 
            console.log(error);
            const message = error.response.data.message;
            message.join(", ");
            this.setState({
                isLoading: false,
                signUpMessage: 'There was an error with your registration:\n' + message
            })
            window.alert(this.state.signUpMessage);
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        (this.state.password !== this.state.confirmPassword) ?
        window.alert("Passwords Don't Match"): this.handleValidation(event);
    }

  render() {
      const { validated } = this.state;

      return(
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Journey Begins Here!</Modal.Title>
        </Modal.Header>
        {
            this.state.isLoading ?
            <Row className="mx-auto">
                <Loader width={150}/>
            </Row>
            :
            <Modal.Body>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={this.handleSubmit}
                >
                    <Form.Row>
                       <Form.Group as={Col} md="6" controlId="FBLOGIN">
                           <Facebook />
                       </Form.Group>
                        <Form.Group as={Col} md="6" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleInput} required />
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} required />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control  type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleInput} required />
                        <Form.Control.Feedback type="invalid">
                        Please make sure your password matches.
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <OverlayTrigger
                        delay={{ show: 0, hide: 0 }}
                        placement="top"
                        overlay={
                            <Popover
                            title={`Site Purpose`}
                            >
                            Welcome To Your Journey To Speaking Fluent Spanish.
                            </Popover>
                            }
                        >
                            <Form.Check
                            required
                            label="I understand this is a test site."
                            feedback="You must agree before submitting."
                            onClick={this.popup}
                            />
                        </OverlayTrigger>
                    </Form.Group>
                </Form>
            </Modal.Body>
        }
        <Modal.Footer>
          <Button className="btn-login" onClick={this.handleFormSwitch}>
            Login
          </Button>
          <Button className="btn-submit" type="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }
}





















// import {
//   ConjugatorIo,
//   Welcome,
//   Email,
//   Password,
//   Rectangle,
//   Button,
//   LetsGo,
//   Path1,
//   Path2,
//   Path3,
//   Path4
// } from "../styles/RegistrationStyles";



// const Register = (props) => {
//     console.log(props);
//     const { values, touched, errors, status, addUser } = props;
//     const token = localStorage.getItem("token");
//     useEffect(() => {
//       if (status) {
//         addUser(status);
//       }
//     }, [status]);

  
//     return (
//     <>
//       <ConjugatorIo>Conjugator</ConjugatorIo>
      
      
//       <Form onSubmit={handleSubmit}>
//         <Welcome>Your Journey To Spanish Fluency Starts Here!</Welcome>
//         {touched.name && errors.name && <p className="error">{errors.name}</p>}
//         <Field type="text" name="name" placeholder="name"/>
//         {touched.email && errors.email && <p className="error">{errors.email}</p>}
//         <Field type="email" name="email" placeholder="email"/>
//         {touched.password && errors.password && <p className="error">{errors.password}</p>}
//         <Field type="password" name="password" placeholder="password"/>
//         {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
//         <Field component="select" name="color">
//             <option value="Beginner">Beginner</option>
//             <option value="Novice">Novice</option>
//             <option value="Expert">Expert</option>
//           </Field>
//         <label>
//           <Field type="checkbox" name="tos"/>
//           Agree to TOS
//         </label>
//         <Button onSubmit={handleSubmit}>Let's Go!</Button>
        
//       </Form>
//       </>
// );
//   };

// const RegisterForm = withFormik({
//   mapPropsToValues: ({ name, email, password, tos }) => {
//     return {
//       name: name || "",
//       email: email || "",
//       password: password || "",
//       tos: tos || false,
//     };
//   },
//   validationSchema: yup.object().shape({
//     name: yup.string()
//       .required("Required"),
//     email: yup.string()
//       .email("You gotta have an email")
//       .required("Email Required"),
//     password: yup.string()
//       .min(6, "Password must be atleast 6 characters long")
//       .required("Password is required"),
//     tos: yup.boolean()
//       .oneOf([true], "*")
//       .required()
//   }),
//   handleSubmit: (values, { resetForm, setStatus, setErrors }) => {
//     console.log("Request");
//     if (values.email === "scottb305@outlook.com") {
//       setErrors({ email: "Email is already taken" });
//     } else {
//       axios.post('https://sp-conjugator-be.herokuapp.com/api/auth/register', values)
//         .then(res => {
//           console.log(res);
//           setStatus(res);
//           resetForm();
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   }
// })(Register);


// export default RegisterForm;
