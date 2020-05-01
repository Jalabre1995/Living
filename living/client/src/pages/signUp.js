import React, { Component } from "react";
import Forms from "../Components/auth/Form";
import axios from "axios";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    loginErrors: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    axios({
      url: "/authentication/signup",
      method: "POST",

      data: {
        email,
        password,
      },
    })
      .then((response) => {
        console.log("data:", response, this.state);
        this.props.history.push("/Home");
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
        />
      </div>
    );
  }
}
