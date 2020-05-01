import React, { Component } from "react";
import Forms from "../Components/auth/Form";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
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

export default SignUp;
