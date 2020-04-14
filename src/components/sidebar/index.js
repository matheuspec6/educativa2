import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './sidebar.css';
import M from "materialize-css";
import user from "./user.png";

import 'hover.css';

class NavSide extends Component {
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
          <div className="col s12">
            <ul id="slide-out" className="sidenav sidenav-fixed">
              <div className="row hvr-grow-shadow">
                <img alt="logo" className="center logo" src={logo} />
              </div>
              <li>
                <Link to="/inicio" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fa fa-home hvr-icon"></i>
                  </span>
            DashBoard
          </Link>
                <Link to="cadastrarAluno" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fas fa-graduation-cap hvr-icon"></i>
                  </span>
            Cadastrar Alunos
          </Link>
                <Link to="" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
                  <span className="icon">
                    <i className="fas fa-user-graduate hvr-icon"></i>
                  </span>
            Lista de Alunos
          </Link>
                <br></br>
                <a href="www.google.com" className="hvr-icon-pop hvr-grow-shadow">
                  <span className="icon">
                    <i className="fa fa-times-circle hvr-icon"></i>
                  </span>
            Sair
          </a>
              </li>
              <li>
                <br />
                <div className="user-view">
                  <a href="#user"><img alt="" className="circle" src={user} /></a>
                  <a href="#name"><span className=" name yellow lighten-5">John Doe</span></a>
                  <a href="#email"><span className=" email">jdandturk@gmail.com</span></a>
                </div>
              </li>
            </ul>
          </div>
        <a data-target="slide-out" className="bars sidenav-trigger"><i className="fas fa-bars"></i></a>
      </>
    );
  }
}
export default NavSide;