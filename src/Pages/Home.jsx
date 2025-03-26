import React from "react";
import { Container, Card } from "react-bootstrap";

const WellnessFeatures = () => {
  const features = [
    {
      title: "Freedom Wall",
      description:
        "Share your thoughts anonymously and connect with others who understand what you're going through.",
      link: "#",
      linkText: "Explore Wall",
    },
    {
      title: "Health & Wellness Blogs",
      description:
        "Access expert tips on exercise, nutrition, meditation, and self-care techniques.",
      link: "#",
      linkText: "Read Articles",
    },
    {
      title: "Guided Meditation & Exercise",
      description:
        "Follow step-by-step guides to practice mindfulness, reduce stress, and stay active.",
      link: "#",
      linkText: "Start Now",
    },
    {
      title: "Self-Care Challenges",
      description:
        "Engage in daily and weekly challenges designed to promote better mental and physical health.",
      link: "#",
      linkText: "Take a Challenge",
    },
  ];

  return (
    <Container className="text-center my-5">
      {/* Title and paragraph */}
      <h2 className="mb-3">Our Wellness Features</h2>
      <p className="mb-4">
        Explore the tools we offer to help you maintain balance, find community support, and grow stronger every day.
      </p>

      {/* Cards appear below the paragraph */}
      <div className="d-flex flex-column align-items-center">
        {features.map((feature, index) => (
          <Card key={index} className="p-3 shadow-sm text-center w-100 mb-3" style={{ maxWidth: "400px" }}>
            <Card.Body>
              <Card.Title className="fw-bold">{feature.title}</Card.Title>
              <Card.Text>{feature.description}</Card.Text>
              <a href={feature.link} className="mt-2 text-primary">{feature.linkText}</a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WellnessFeatures;
