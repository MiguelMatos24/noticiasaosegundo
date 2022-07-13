import React from "react";
import Link from "next/link";

export default function NewsList(props) {
  const { id, news, title } = props;

  return (
    <div id={id} className="container-fluid news">
      <div className="row-fluid">
        <h2 style={{ marginLeft: "20px" }}>{title}</h2>
        <div>
          <div className="d-flex flex-row group-button">
            <div className="col-12">
              <Link href="/">
                <button>Última Hora</button>
              </Link>
              <Link href="/latest-news/politics">
                <button>Política</button>
              </Link>
              <Link href="/latest-news/economics">
                <button>Economia</button>
              </Link>
              <Link href="/latest-news/sports">
                <button>Desporto</button>
              </Link>
              <Link href="/latest-news/art">
                <button>Arte</button>
              </Link>
              <Link href="/latest-news/country">
                <button>País</button>
              </Link>
              <Link href="/latest-news/culture">
                <button>Cultura</button>
              </Link>
              <Link href="/latest-news/society">
                <button>Sociedade</button>
              </Link>
              <Link href="/latest-news/fire">
                <button>Incêndios</button>
              </Link>
            </div>
          </div>
          <div className="row g-4 ">
            {news.map((n) => (
              <div className="col-sm-6 col-12 col-xl-6" key={n.titulo}>
                <div className="group-news py-4">
                  <div className="row">
                    <div className="left col-xl-8">
                      <div className="news-body">
                        <Link href={n.url}>
                          <h2 className="news-text" href={n.url}>
                            {n.titulo}
                          </h2>
                        </Link>
                        <a className="news-text" href={n.url}>
                          {n.descricao}
                        </a>
                      </div>
                    </div>
                    <div className="right col-xl-4">
                      <Link href={n.url}>
                        <img
                          href={n.url}
                          className="news-img-top"
                          width="100%"
                          height="225"
                          src={n.multimediaPrincipal}
                        ></img>
                      </Link>
                    </div>
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
