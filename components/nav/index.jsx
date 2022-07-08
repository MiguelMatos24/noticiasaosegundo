import React, { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav ">
      <div className="d-flex flex-row navbar-header">
        <div className="left col-2">
          <Menu>
            <a className="menu-item" href="/">
              Últimas Notícias
            </a>
            <a className="menu-item" href="/#politics">
              Política
            </a>
            <a className="menu-item" href="/#economy">
              Economia
            </a>
            <a className="menu-item" href="/#sports">
              Desporto
            </a>
            <a className="menu-item" href="/#fame">
              Fama
            </a>
            <a className="menu-item" href="/#country">
              País
            </a>
            <a className="menu-item" href="/#world">
              Mundo
            </a>
            <a className="menu-item" href="/#culture">
              Cultura
            </a>
            <a className="menu-item" href="/#lifestyle">
              Lifestyle
            </a>
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
