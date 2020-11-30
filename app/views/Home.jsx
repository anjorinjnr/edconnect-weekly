import React, {useState, useEffect} from "react";
import { Button, Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import Layout from "./shared/Layout";

const Home = ({projects, user}) => {
  return (
    <Layout user={user}>
      <>
        <Jumbotron>
          <div>
            <h1>Welcome to Project Explorer</h1>
          </div>
          <p>
            Project Explorer is a repository for final year projects across all
            departments at your institution. You can submit your projects and
            search other projects submitted by others to learn from.
          </p>
         {user ? <div>
            <Button href="/signup" variant="primary" className="mr-4">
              Get Started
            </Button>
            <Button href="/login" variant="secondary">
              Login
            </Button>
          </div> : null }
        </Jumbotron>

        <Container>
          <Row className="showcase">
            {projects.map((project) => (
              <Col key={project.id} md={3} lg={3} > 
                <Card  className="p-3">
                  <h5>
                    <a href={`/project/${project.id}`}>{project.name} </a>
                  </h5>
                  <h6>{project.authors.join(', ')}</h6>
                  <p className="mt-3">{project.abstract}</p>
                  <div>
                    {project.tags.map((tag) => (
                      <a key={tag} href="#">
                        {tag}
                      </a>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    </Layout>
  );
};

export default Home;
