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
            <Link href="#ultima">
              <a>Última Hora</a>
            </Link>
            <Link href="#politics" scroll={false}>
              <a>Política</a>
            </Link>
            <Link href="#economia" scroll={false}>
              Economia
            </Link>
            <Link href="#desporto" scroll={false}>
              <a>Desporto</a>
            </Link>
            <Link href="#fama" scroll={false}>
              <a>Fama</a>
            </Link>
            <Link href="#pais" scroll={false}>
              <a> País</a>
            </Link>
            <Link href="#mundo" scroll={false}>
              <a>Mundo</a>
            </Link>
            <Link href="#cultura" scroll={false}>
              <a>Cultura</a>
            </Link>
            <Link href="#lifestyle" scroll={false}>
              <a>Lifestyle</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
