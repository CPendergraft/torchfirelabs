import React from 'react'
import { Link } from 'react-router-dom'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";


// The Header creates links that can be used to navigate
// between routes.
const logo = require('../images/logo_white_2.png');
const Header = () => (
    <header >
        <Navbar inverse fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/torchfirelabs'>  <img alt="songart" style={{height:"50px",paddingBottom:"10px"}} src={logo} />  </Link>

                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse  >
                <Nav >
                    <NavItem className="navlinks" >
                        <Link to='/torchfirelabs'>Development</Link>
                    </NavItem>
                    <NavItem className="navlinks" >
                        <Link to='/torchfirelabs/illustrations'>Illustrations</Link>
                    </NavItem>
                    <NavItem className="navlinks" >
                        <Link to='/torchfirelabs/sounddesign'>Sound Design</Link>
                    </NavItem>
                    <NavItem className="navlinks" >
                        <Link to='/torchfirelabs/contact'>Contact</Link>
                    </NavItem>



                </Nav>
                <Nav pullRight  >
                    <NavDropdown  className="navlinks"  title="Social" id="basic-nav-dropdown">
                        <a className="social_item"  href="https://www.linkedin.com/in/chrispendergraft/" >LinkedIn</a>
                        <a  className="social_item"   href="https://instagram.com/christopherpendergraft"  > Instagram </a>
                        <a  className="social_item"  href="https://soundcloud.com/chris-pendergraft"  > Soundcloud </a>
                        <a  className="social_item"  href="https://facebook.com/batukurakura"  > Facebook </a>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)

export default Header