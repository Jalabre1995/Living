import React, { Component } from "react";
import Forms from "../Components/auth/Form";
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
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signup",
      method: "POST",

      user: {
        email,
        password,
      },
    })
      .then((response) => {
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("Error", error.response);
      });
  };

  render() {
    return (
      <div>
        <Forms
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          password={this.state.password}
          email={this.state.email}
        />
      </div>
    );
  }
}
