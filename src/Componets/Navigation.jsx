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
  { href: '/', text: 'Home',className: 'Links' },
  { href: 'about', text: 'About', className: 'Links' },
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
            <NavbarToggler onClick={this.toggle} />
         
          <Collapse isOpen={this.state.isOpen} navbar>
           
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
            
          </Collapse>

            <div className='ContainerButtonNumber BotonNav'>
              <a target="blank" style={{textDecoration:'none'}} href='https://api.whatsapp.com/send?phone=19098278183&text=Conecta%20Con%20Nosotros'>
                
              <button>+1 (909)827-8183</button>
              </a>
            </div>

        </Navbar>
      </div>
    );
  }
}