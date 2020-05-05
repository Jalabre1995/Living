import React, { Component } from "react";
import Forms from "../Components/auth/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    loginErrors: "",
  };

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
        console.log("data:", response);
        const isAuthenticated = response.data.isAuthenticated;
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
        this.props.history.push("/Home");
      })
      .catch((error) => {
        this.setState({
          loginErrors: error.response.data.message,
        });
      });
  };

  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      return <Redirect to="/Home" />;
    }
    return (
      <div>
        <Forms
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div>
          <h1 className="text-center">{this.state.loginErrors}</h1>
        </div>
      </div>
    );
  }
}
