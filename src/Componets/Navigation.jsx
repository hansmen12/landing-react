import React, { Component } from 'react';
import './Navigation.scss'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const links = [
  { href: '#home', text: 'Home',className: 'Links' },
  { href: '#about', text: 'About', className: 'Links' },
  { href: '#cata', text: 'Employer ' , className: 'Links' },
  { href: '#test2', text: 'Job seeker' , className: 'Links' },

];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar className='NavStyle' color="light" light expand="lg">
           <div className='ContainerLogo'>

           </div>
           <div className='ContainerLogoText'>
             <p>R&A Work Staffing LLC</p>
            </div>
          <Collapse isOpen={this.state.isOpen} navbar>
           
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
            
          </Collapse>
            <div className='ContainerButtonNumber'>
              <button>(909)827-8183</button>
            </div>
          <NavbarToggler onClick={this.toggle} />

        </Navbar>
      </div>
    );
  }
}