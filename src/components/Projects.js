import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";  
import projImg3 from "../assets/img/project-img3.png";  
import "../styles/Project.scss";
export default function Projects() {
  const projectInformation = [

    {
      title: "InnovateHub",
      description: "Where innovation meets frontend development excellence.",
      imgUrl: projImg3,
    },
    {
      title: "LaunchLeap",
      description:
        "Taking your startup from concept to launch with React magic.",
      imgUrl: projImg1,
    },
    {
      title: "UIWizards",
      description:
        "Masters of user interfaces, creating stunning React designs.",
      imgUrl: projImg2,
    },
    {
      title: "CodeNest",
      description: "Building nests of code for startups to thrive in.",
      imgUrl: projImg3,
    },
    {
      title: "StartupFlow",
      description: "Flowing with creativity to fuel your startup's frontend.",
      imgUrl: projImg1,
    },
    {
      title: "ReactXpertise",
      description: "Your trusted partner in React frontend development.",
      imgUrl: projImg2,
    },
    {
      title: "PixelPioneers",
      description: "Pioneering pixel-perfect React interfaces for startups.",
      imgUrl: projImg3,
    },
    {
      title: "AppVelocity",
      description:
        "Accelerating your startup's success with React-powered apps.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              quasi praesentium animi quas! Id distinctio eveniet modi dolorum
              quas harum!
            </p>
            <Tab.Container id="project" defaultActiveKey="first">
              <Nav variant="pills" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
           
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projectInformation.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              Lorem ipsum 
              </Tab.Pane>
              <Tab.Pane eventKey="third">
               Lorem ipsum 
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img src={colorsharp2} alt="" className="background-image-right" /> */}
    </section>
  );
}
