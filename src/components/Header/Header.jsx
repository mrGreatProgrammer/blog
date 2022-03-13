import React from "react";
import Filter from "../Filter/Filter";
import Searcher from "../Searcher/Searcher";
import Logo from "../ui/Logo/Logo";
import "./Header.css";

function Header() {
  
  return (
    <header className="header">
      
      <Logo /> <Searcher /> <Filter />
    </header>
  );
}

export default Header;
