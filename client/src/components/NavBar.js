import React, { useState } from 'react';
import { Container, NavbarText } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    
      <Navbar style={{'background-color': '#940f0f'}} light expand="md">
      <Container className="themed-container">
        <png>
            <a href='/'><img src="logo.png" width="50" /></a>
        </png>
        <NavbarBrand href="/" style={{'marginLeft':'1.5rem', 'color':'#fff'}}>MEALKHU</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about" style={{'color':'#fff'}}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/menu" style={{'color':'#fff'}}>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mypick" style={{'color':'#fff'}}>MyPick</NavLink>
              </NavItem>
            </Nav>
            <NavbarText style={{'color':'#fff'}}>OSS Project</NavbarText>
          </Collapse>  
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;