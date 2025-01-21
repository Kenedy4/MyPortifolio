import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActivelink] = useState('home');
  
  const [scrolled, setScrolled] = useState('false')
  useEffect (() => {
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled('true')
      } else {
        setScrolled('false')
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
}, [])

  const onUpdateActiveLink = (value) => {
    setActivelink(value);
  }
  return (
    <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://via.placeholder.com/40x40" alt="Logo" /> My Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-toggler-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div>
              <br />
              <small>
                <a href="https://github.com/your-github-Kenedy4" target="_blank">
                  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </a>
              </small>
              <small>
                <a href="https://www.linkedin.com/in/kenedy-musyoki/" target="_blank">
                  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                </a>
              </small>
              <small>
                <a href="https://X.com/your-X-username" target="_blank">
                  <img src="https://img.shields.io/badge/X-1DA1F2?style=for-the-badge&logo=X&logoColor=white" alt="X" />
                </a>
              </small>
              <small>
                <a href="https://www.blog.com/your-blog-username" target="_blank">
                  <img src="https://img.shields.io/badge/blog-E4405F?style=for-the-badge&logo=blog&logoColor=white" alt="Blog" />
                </a>
              </small>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Router>
  );
};

export default NavBar;
