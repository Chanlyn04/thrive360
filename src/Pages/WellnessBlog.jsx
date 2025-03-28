import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const WellnessBlog = () => {
  return (
    <Container className="wellness-container">
      {/* Header */}
      <div className="header">
        <h2>Health & Wellness Blogs</h2>
        <p>Expert guidance on how to maintain physical and mental well-being during your academic journey.</p>
      </div>

      {/* Category Navigation */}
      <div className="categories">
        <button className="active">All Topics</button>
        <button>Mental Health</button>
        <button>Physical Wellness</button>
        <button>Nutrition</button>
        <button>Stress Management</button>
      </div>

      {/* Featured Blog */}
      <div className="featured-blog">
        <img src="https://via.placeholder.com/300x200" alt="Featured Blog" />
        <div className="featured-blog-content">
          <div className="featured-category">
            <span>Mental Health</span>
          </div>
          <h3 className="featured-title">Finding Balance: How to Manage Academic Stress</h3>
          <p>Learn effective techniques to balance your academic responsibilities with self-care practices that keep you mentally and physically healthy.</p>
          <div className="author">
            <span className="author-icon">C</span> <span>Dr. Channy San</span>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {[
          {
            title: "Finding Balance: How to Manage Academic Stress",
            category: "Mental Health",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
          {
            title: "Brain Foods: Eating for Academic Success",
            category: "Mental Health",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
          {
            title: "The Student’s Guide to Quality Sleep",
            category: "Mental Health",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
          {
            title: "The Student’s Guide to Quality Sleep",
            category: "Mental Health",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
         
        ].map((blog, index) => (
          <Card key={index} className="blog-card">
            <Card.Img variant="top" src={blog.image} />
            <Card.Body>
              <span className="blog-category">{blog.category}</span>
              <Card.Title className="blog-title">{blog.title}</Card.Title>
              <a href={blog.link} className="blog-link">
                Continue reading
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default WellnessBlog;
