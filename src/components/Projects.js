import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100x180" alt="Project Thumbnail" />
        <Card.Body>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text>
            A personal portfolio website showcasing my projects, skills, and experience.
          </Card.Text>
          <Button variant="primary" href="https://github.com/your-portfolio-link" target="_blank">
            View Project
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
