import React, { Component } from "react";
import Form from "../Components/auth/Form";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          usuer: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.loggedIn === true) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          password={this.state.password}
          email={this.state.email}
        />
      </div>
    );
  }
}
