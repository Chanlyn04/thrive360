import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const WellnessBlog = () => {
  const blogs = [
    {
      title: "Finding Balance: How to Manage Academic Stress",
      category: "Mental Health",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Brain Foods: Eating for Academic Success",
      category: "Nutrition",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "The Student’s Guide to Quality Sleep",
      category: "Sleep",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">Health & Wellness Blogs</h2>
      <p className="text-center">
        Expert guidance on how to maintain physical and mental well-being during
        your academic journey.
      </p>
      <Row>
        {blogs.map((blog, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.category}
                </Card.Subtitle>
                <Button variant="primary" href={blog.link}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WellnessBlog;
