import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRef } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="d-flex flex-row justify-content-between w-100 navbar-header">
        <a>Notícias ao Segundo</a>
        <Hamburger
          color={"white"}
          toggled={isOpen}
          toggle={setOpen}
          size={20}
        />
      </div>
      {isOpen && (
        <div className="links">
          <div className="cont">
            <a href="#ultima">Última Hora</a>
            <Link href="#politics" scroll={false}>
              <a>Política</a>
            </Link>
            <Link href="#economia" scroll={false}>
              Economia
            </Link>
            <a href="#desporto">Desporto</a>
            <a href="#fama">Fama</a>
            <a href="#pais">País</a>
            <a href="#mundo">Mundo</a>
            <a href="#cultura">Cultura</a>
            <a href="#lifestyle">Lifestyle</a>
          </div>
        </div>
      )}
    </nav>
  );
}
