import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function carousel(props) {
  return (
    <Carousel>
      {props.news.map((n) => (
        <Carousel.Item>
          <img
            src={n.multimediaPrincipal}
            className="d-block"
            width="100%"
            height="300"
            role="img"
          />
          <Carousel.Caption className="title">
            <a href={n.url}>{n.titulo}</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
