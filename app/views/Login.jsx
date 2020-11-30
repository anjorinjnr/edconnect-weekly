import React, {useState} from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Layout from "./shared/Layout";
import FormError from './FormError';


const Login = (props) => {
  const {error} = props

  return (
       <Layout {...props}>
        <Container className="border rounded p-5">
       
          <Row>
            <Col>
              <h3 className="mb-4">Login</h3>
              <FormError error={props.error} />
              <Form id="loginForm" method="post" action="login">
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button varian="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
       </Layout>
  );
};

export default Login;
