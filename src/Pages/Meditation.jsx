import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Meditation = () => {
  const guides = [
    {
      title: "Beginner’s Breath Awareness",
      description: "Learn effective techniques to reduce academic stress.",
      category: "Mental Health",
      link: "#",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">Guided Meditation & Exercise</h2>
      <Row>
        {guides.map((guide, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{guide.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {guide.category}
                </Card.Subtitle>
                <Card.Text>{guide.description}</Card.Text>
                <Button variant="primary" href={guide.link}>
                  Start Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Meditation;
