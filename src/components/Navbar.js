import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {MenuDown} from "react-bootstrap-icons"
import "../styles/NavBar.scss";

export const NavBar = () => {
  const [activeLink, setActiveLinke] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLinke(value);
  };

  return (
    <Navbar expand="lg" className={scrolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
         <a href="#"></a>
          <img className="logo-icon" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>  
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home" className={activeLink === "home"? "active navbar-link" : "navbar-link" } onClick={() => onUpdateActiveLink("home")} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills"? "active navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink("skills")} >skills</Nav.Link>
            <Nav.Link href="#project"className={activeLink === "projects"? "active navbar-link" : "navbar-link" }onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="#"><img src={navIcon1} alt="social-icon" /></a>
              <a href="#"><img src={navIcon2} alt="social-icon" /></a>
              <a href="#"><img src={navIcon3} alt="social-icon" /></a>
              </div>
              <button className="vvd" onClick={()=>{console.log("clicked");}}><span>Lets Connectect</span></button>
          </span>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
