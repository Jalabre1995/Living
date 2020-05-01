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
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signin",
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
        console.log("Error:", error.response);
        this.setState({
          loginErrors: error.response.data.message,
        });
      });
  };

  render() {
    return (
      <div>
        <Forms
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <p>{this.loginErrors}</p>
      </div>
    );
  }
}
