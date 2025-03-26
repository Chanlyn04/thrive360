import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

const FreedomWall = () => {
  const posts = [
    {
      id: 1,
      author: "Anonymous",
      date: "March 21 at 6:59 PM",
      content:
        "I was doing fine, but you just came and ruined my peace of mind. PLS.. let me go back to the time when I completely didn’t have any idea you exist. It is hard to sleep when there’s so much on your mind.",
      likes: 34,
      comments: 50,
    },
    {
      id: 2,
      author: "Anonymous",
      date: "March 21 at 6:59 PM",
      content:
        '"How is your life?" Ito until unti-unting nilulunod ng kalungkutan na paulit-ulit lang...',
      likes: 120,
      comments: 113,
    },
  ];

  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      {/* Section Header */}
      <h2 className="text-center">Freedom Wall</h2>
      <p className="text-center">
        Express yourself freely, share your thoughts, struggles, victories, or uplifting messages with our community.
      </p>

      {/* New Post Input */}
      <Card className="mb-4 p-3 shadow-sm w-100" style={{ maxWidth: "600px" }}>
        <Form.Control type="text" placeholder="What's on your mind?" className="mb-2" />
        <Button variant="primary" className="w-100">Post</Button>
      </Card>

      {/* Displaying Posts in Block Layout */}
      {posts.map((post) => (
        <Card className="mb-3 p-3 shadow-sm w-100 border-0" style={{ maxWidth: "600px" }} key={post.id}>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="fw-bold">{post.author}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
            <Card.Text>{post.content}</Card.Text>
            <div className="d-flex justify-content-between">
              <small>❤️ {post.likes} Likes</small>
              <small>💬 {post.comments} Comments</small>
            </div>
          </Card.Body>
        </Card>
      ))}

      {/* View More Link */}
      <div className="text-center mt-3">
        <a href="#">View more posts</a>
      </div>
    </Container>
  );
};

export default FreedomWall;
