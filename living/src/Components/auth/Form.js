import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Forms(props) {
  return (
    <div className="container">
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="form"
            type="email"
            placeholder="Enter email"
            //value={props.email}
            onChnage={props.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form"
            type="password"
            placeholder="Password"
            // value={props.password}
            onChnage={props.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
