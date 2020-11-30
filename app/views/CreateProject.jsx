import Layout from "./shared/Layout";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import FormError from './FormError';

export default (props) => {
  const project = props.formData || {};

  return (
    <Layout {...props}>
      <FormError error={props.error} />
      <Row>
        <Col>
          <h3 className="mb-4">Submit Project</h3>
          <Form id="createProjectForm" method="post" action="/projects/submit">
            <Form.Group>
              <Form.Label>Project name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter project name"
                defaultValue={project ? project.name : ""}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Project abstract</Form.Label>
              <Form.Control
                as="textarea"
                name="abstract"
                rows="7"
                defaultValue={project ? project.abstract : ""}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author(s)</Form.Label>
              <Form.Control
                type="text"
                name="authors"
                placeholder="Enter author names (seperated by comma)"
                defaultValue={
                  project && project.authors ? project.authors.join(",") : ""
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tag(s)</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="Use # to tag project with different topics (e.g. #javascript #mongodb)"
                defaultValue={
                  project && project.tags ? project.tags.join(" ") : ""
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {project ? "Save" : "Continue"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
