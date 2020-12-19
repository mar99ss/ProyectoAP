import React, {Component} from 'react'
import { 
    Navbar,
    NavbarBrand, 
    Nav, 
    Collapse,
    NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo_header.png'
import log_out from './log-out.svg'

const backgroundNavbar = {
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0)"
};

var textStyle = {
  fontSize: 22,
  color: '#FFFD',
  spanHover:{
    color: '#FFFF'
  },
  fontFamily: "Comfortaa"
}

export default class Header extends Component {
  
    render () {
        return(
          <div d-flex flex-row>
          <Navbar dark expand="md" style={backgroundNavbar}>
                  <NavbarBrand className="mr-auto" href="/home"><img src= {logo} height="65" width="200" alt='Logo tutorías a tu alcance' /></NavbarBrand>
                  <Collapse navbar>
                      <Nav navbar>
                      </Nav>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to='/categorias' style={textStyle} ><span className="fa fa-info fa-lg"></span> Categorías</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/userinformation' style={textStyle}><span className="fa fa-list fa-lg"></span> Perfil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/login' style={textStyle}><img src= {log_out} height="35" width="30" alt='Logo tutorías a tu alcance' /></NavLink>
                        </NavItem>
                      </Nav>
                  </Collapse>
          </Navbar>
          
      </div>
        )
    }
}

