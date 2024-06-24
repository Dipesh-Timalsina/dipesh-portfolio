import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
    </>
  );
};

export default Layout;
