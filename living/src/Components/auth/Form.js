import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="email"
          name="email"
          palceholder="Email"
          value={props.email}
          onChnage={props.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChnage={props.handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
