import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import astronaut from "../assets/img/header-img.svg";
import "../styles/Banner.scss";

import React from "react";

export default function Banner() {
  const toRotate = ["Developer", "Designer", "Freelancer"];
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, SetDelta] = useState(400 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      SetDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      SetDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      SetDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={4}>
            <span className="tagline">Welcome To my portfolio</span>
            <h1>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              debitis quos cupiditate. Eaque deleniti consequuntur nisi cumque
              voluptates error consequatur, adipisci quia, iste officiis iusto
              est laborum reprehenderit autem maiores optio perspiciatis!
              Tempore placeat reiciendis nisi.
            </p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              {" "}
              Lets Connect<span></span>
              <ArrowRightCircle size={32} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={astronaut} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
