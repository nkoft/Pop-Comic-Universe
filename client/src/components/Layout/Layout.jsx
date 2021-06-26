import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React from "react";
import Link from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav user={props.user} className="layout-nav" />
      <div className="layout-children">{props.children}</div>
      <Footer className="layout-footer" />
    </div>
  );
};

export default Layout;
