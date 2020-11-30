import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormError from './FormError';

import Layout from "./shared/Layout";

export default (props) => {
  const {programs, graduationYears} = props
  const user = props.formData;
  
  return (
    <Layout {...props}>
      <Row className="justify-content-center my-5 w-75 mx-auto">
        <Col>
          <h3>Sign up</h3>
          <FormError error={props.error} />
          <Form method="post" action="signup">
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  defaultValue={user.firstname || ""}
                  
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                 
                  defaultValue={user.lastname || ""}
                  placeholder="Last name"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={user.email || ""}
                  placeholder="Your Email address"
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  defaultValue={user.password || ""}
                  placeholder="Your Password"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Program</Form.Label>
                <Form.Control
                  as="select"
                  name="program"
                  defaultValue={user.program || "Choose..."}
                  required
                >
                  <option value="">Choose...</option>
                  {programs.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Matriculation number</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.matricNumber || ""}
                  name="matricNumber"
                  placeholder="e.g. 16/2020"
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Graduation year</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={user.graduationYear || "Choose..."}
                  name="graduationYear"
                  required
                >
                  <option value="">Choose...</option>
                  {graduationYears.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
