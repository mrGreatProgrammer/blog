import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="nav__bar">
      <button onClick={goBack} className="go__back--btn">
        <i class="fas fa-chevron-left"></i>
        назад
      </button>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu--item">
            <NavLink to="/" className="navigation__link">
              main
            </NavLink>
          </li>
          <li className="nav__menu--item">
            <NavLink to="/settings" className="navigation__link">
              settigs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
