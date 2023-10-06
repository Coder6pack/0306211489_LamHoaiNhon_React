import React from "react";
import TopBar from "./TopBar/TopBar";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";

export default function Header() {
  return (
    <>
      <header className="header">
        <TopBar />
        <MiddleHeader />
        <NavBar />
      </header>
    </>
  );
}
