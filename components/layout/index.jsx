import Nav from "components/nav";
import Footer from "components/footer";

import React from "react";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <main className="main py-3">{props.children}</main>
      <Footer />
    </div>
  );
}
