import React, { Component } from "react";
//import Forms from "../Components/auth/Form";
import axios from "axios";

class SignUp extends Component {
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
      url: "/authentication/signup",
      method: "POST",

      data: {
        email,
        password,
      },
    })
      .then((response) => {
        // console.log("data:", response, this.state);
        this.props.history.push("/Home");
      })
      .catch((error) => {
        //  console.log("Error", error.response);
        this.setState({
          loginErrors: error.response.data.message,
        });
      });
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
