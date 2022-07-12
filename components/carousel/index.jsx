import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function carousel(props) {
  const { news } = props;
  return (
    <Carousel>
      {news.map((n, index) => (
        <Carousel.Item key={index}>
          <Link href={n.url}>
            <img
              src={n.multimediaPrincipal}
              className="d-block carousel-image"
              width="100%"
              height="300"
              role="img"
            />
          </Link>
          <Carousel.Caption>
            <a href={n.url}>{n.titulo}</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
