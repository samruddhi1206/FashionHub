import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row className="w-100 text-center">
        <Col>
          <h1 className="display-1 fw-bold" style={{color: "#e6b980"}}>404</h1>
          <h3 className="mb-3">Page Not Found</h3>
          <p className="text-muted mb-4">
            Sorry, the page you are looking for does not exist.
          </p>

          <Button as={Link} to="/" style={{backgroundColor:"#e6b980", border:'none'}}>
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;