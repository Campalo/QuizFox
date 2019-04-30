import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar2 extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar2;
