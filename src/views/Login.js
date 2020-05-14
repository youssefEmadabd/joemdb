import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Auth from "../utils/Auth";
import styles from "./Login.module.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.onchangeHandler = this.onchangeHandler.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }
  login(e) {
    e.preventDefault();
    Auth.auth()
      .signInWithEmailAndPassword(this.state.email.trim(), this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }
  signup(e) {
    e.preventDefault();
    Auth.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  onchangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.title}>JOEMDB</div>
        <div className={styles.subtitle}>Your source for movie info</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="txtemail"
              type="email"
              placeholder="Enter email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              className={styles.inputField}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="txtpassword"
              type="password"
              placeholder="Password"
              className={styles.inputField}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            id="login"
            onClick={this.login}
          >
            Login
          </Button>
          <Button id="signup" onClick={this.signup} variant="warning">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}
export default Login;
