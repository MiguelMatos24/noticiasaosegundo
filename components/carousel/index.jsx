import React from "react";

export default function carousel(props) {
  return (
    <div>
      <div
        id="destaques-slider"
        className="carousel slide carousel-fade destaques"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {props.news.map((n, index) => (
            <>
              <div
                className={
                  index == 0 ? "carousel-item active" : "carousel-item"
                }
                data-bs-interval="1000"
              >
                <image
                  src={n.multimediaPrincipal}
                  className="d-block"
                  width="100%"
                  height="300"
                  role="img"
                />
                <div className="carousel-caption ">
                  <a href={n.url}>{n.titulo}</a>
                </div>
              </div>
            </>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#destaques-slider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#destaques-slider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}
