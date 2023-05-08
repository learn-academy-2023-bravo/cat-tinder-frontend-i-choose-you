import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar>
        <NavbarBrand className="menutitle">I Choose You</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="menutoggle" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className={"navlink"} to="/">Home Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navlink"} to="/PokemonNew">Add a Pokemon</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navlink"} to="/PokemonIndex">Pokemon!</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
