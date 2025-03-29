import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Meditation = () => {
  const guides = Array(8).fill({
    title: "Beginner’s Breath Awareness",
    category: "Mental Health",
    image: "https://via.placeholder.com/300x200",
  });

  return (
    <div className="meditation-page">
      <Container className="meditation-container">
      <div className="header">
        <h2 className="text-center">Guided Meditation & Exercise</h2>
        <p className="text-center subtitle">
          Follow step-by-step guides designed to help you practice mindfulness, reduce stress, and stay physically active.
        </p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button className="tab active">Meditation</button>
          <button className="tab">Stretching</button>
          <button className="tab">Workouts</button>
        </div>

        {/* Guide Grid */}
        <Row className="guide-grid">
          {guides.map((guide, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="guide-card">
              <Card className="equal-height-card">
                <div className="image-placeholder">
                  <img src={guide.image} alt="Guide" className="card-image" />
                </div>
                <Card.Body className="card-body">
                  <span className="guide-category">{guide.category}</span>
                  <Card.Title>{guide.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Meditation;