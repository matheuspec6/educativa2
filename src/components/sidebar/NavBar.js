import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './sidebar.css';
import M from "materialize-css";
import user from "./user.png";

import 'hover.css';

class NavBar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });


  }

  render() {
    return (
      <>
         <nav className="white"></nav>
      </>
    );
  }
}
export default NavBar;