import React, { useState, useEffect } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
export default ({user}) => {

  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between">
      <Nav>
        <Navbar.Brand href="/">Project Explorer App</Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search Projects" />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
        <Nav>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/projects/submit">Submit</Nav.Link>
        </Nav>
      </Nav>

      {user ? (
        <Nav className="justift-content-end">
          <Nav.Link
            href="/logout"
            >
            Logout
          </Nav.Link>
          <Nav.Link id="username">
            Hi, {user.firstname}
          </Nav.Link>
        </Nav>
      ) : (
        <Nav className="justift-content-end">
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
};
