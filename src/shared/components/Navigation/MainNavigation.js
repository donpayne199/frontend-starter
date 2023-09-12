import React from "react";
import { useState } from "react";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import "./MainHeaderCSS.css";
import "./MainNavigationCSS.css";
import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen((drawerIsOpen) => !drawerIsOpen);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      <SideDrawer show={drawerIsOpen} closeDrawer={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};
export default MainNavigation;
