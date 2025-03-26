import React from "react";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";

const Challenges = () => {
  const challenges = [
    {
      title: "Morning Mindfulness",
      description: "Start your day with 5 minutes of mindful breathing.",
      type: "Daily",
      participants: 120,
      link: "#",
    },
    {
      title: "Digital Detox",
      description: "Spend 2 hours each day without digital devices.",
      type: "Weekly",
      participants: 195,
      progress: 30,
      link: "#",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">Self-Care Challenges</h2>
      <Row>
        {challenges.map((challenge, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{challenge.title}</Card.Title>
                <Card.Text>{challenge.description}</Card.Text>
                <ProgressBar now={challenge.progress} className="mb-2" />
                <Button variant="success" href={challenge.link}>
                  Join Challenge
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Challenges;
