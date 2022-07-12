import React from "react";
import Link from "next/link";

export default function Category(props) {

  const { id, news, title } = props;

  return (
    <div id={id} className="container-fluid">
      <div className="news album py-4">
        <h2 className="text-center mb-3">{title}</h2>
        <div className="container">
          <div className="row g-3 ">

        <div>
          <div className="row g-4">

            {news.map((n) => (
              <div
                className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                key={n.titulo}
              >
                <div className="card shadow-sm">
                  <Link href={n.url}>
                    <img
                      href={n.url}
                      className="card-img-top"
                      width="100%"
                      height="225"
                      src={n.multimediaPrincipal}
                    ></img>
                  </Link>
                  <div className="card-body">
                    <a className="card-text" href={n.url}>
                      {n.titulo}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
