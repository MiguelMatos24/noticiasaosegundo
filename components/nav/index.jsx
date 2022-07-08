import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav ">
      <div className="d-flex flex-row">
        <div className="left col-2">
          <Menu>
            <Link className="menu-item" href="/">
              Últimas Notícias
            </Link>
            <Link className="menu-item" href="/#politics">
              Política
            </Link>
            <Link className="menu-item" href="/#economy">
              Economia
            </Link>
            <Link className="menu-item" href="/#sports">
              Desporto
            </Link>
            <Link className="menu-item" href="/#fame">
              Fama
            </Link>
            <Link className="menu-item" href="/#country">
              País
            </Link>
            <Link className="menu-item" href="/#world">
              Mundo
            </Link>
            <Link className="menu-item" href="/#culture">
              Cultura
            </Link>
            <Link className="menu-item" href="/#lifestyle">
              Lifestyle
            </Link>
            <img
              src="logo.png"
              alt="Notícias ao Segundo"
              className="logo"
              style={{ marginTop: "50px" }}
            />
          </Menu>
        </div>
        <div className="col-12">
          <h2>Notícias ao Segundo</h2>
        </div>
      </div>
    </nav>
  );
}
