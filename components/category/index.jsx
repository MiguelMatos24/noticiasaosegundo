import React from "react";

export default function Category(props) {
  return (
    <div id={props.id}>
      <div className="news album py-4">
        <h2 className="text-center" style={{ marginBottom: 30 }}>
          {props.title}
        </h2>
        <div className="container">
          <div className="row g-3 ">
            {props.news.map((n) => (
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                key={n.titulo}
              >
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    width="100%"
                    height="225"
                    src={n.multimediaPrincipal}
                  ></img>
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
