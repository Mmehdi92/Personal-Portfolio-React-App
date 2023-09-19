import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import react from "../assets/img/logo192.png";

export default function Skills() {
  const responsive = {
    superLageDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2> Skills </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur labore molestiae libero corrupti BREAK <br></br>ducimus
                doloribus eligendi optio, eius dignissimos fugiat tenetur
                architecto inventore sapiente officia voluptatum similique
                dolorem a! Quas?
              </p>
            </div>
      <Carousel responsive={responsive} infinite={true} className="skill-slider">
        <div className="item">
          <img src={meter1} alt="skill" />
          <h5>Web Development</h5>
        </div>
        <div className="item">
          <img src={meter2} alt="skill" />
          <h5>React</h5>
        </div>
        <div className="item">
          <img src={meter3} alt="skill" />
          <h5>Web Development</h5>
        </div>
        <div className="item">
          <img src={react} alt="skill" />
          <h5>Web Development</h5>
        </div>
      </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}