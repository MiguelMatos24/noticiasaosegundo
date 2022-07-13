import React from "react";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";

export default function Nav(props) {
  return (
    <div className="nav-container">
      <nav className="nav ">
        <div className="container">
          <div className="d-flex  flex-row navbar-header row-full ">
            <Menu>
              <Link className="menu-item" href="/">
                Últimas Notícias
              </Link>
              <Link className="menu-item" href="/latest-news/politics">
                Política
              </Link>
              <Link className="menu-item" href="/latest-news/economics">
                Economia
              </Link>
              <Link className="menu-item" href="/latest-news/sports">
                Desporto
              </Link>
              <Link className="menu-item" href="/latest-news/art">
                Arte
              </Link>
              <Link className="menu-item" href="/latest-news/country">
                País
              </Link>
              <Link className="menu-item" href="/latest-news/world">
                Mundo
              </Link>
              <Link className="menu-item" href="/latest-news/culture">
                Cultura
              </Link>
              <Link className="menu-item" href="/latest-news/society">
                Sociedade
              </Link>
              <Link className="menu-item" href="/latest-news/fire">
                Fogos
              </Link>
              <img
                src="/logo.png"
                alt="Notícias ao Segundo"
                className="logo"
                style={{ marginTop: "50px" }}
              />
            </Menu>
          </div>
          <div>
            <h2>Notícias ao Segundo</h2>
          </div>
        </div>
      </nav>
    </div>
  );
}
