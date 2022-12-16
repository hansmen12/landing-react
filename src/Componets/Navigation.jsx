import React, { Component } from 'react';
import './Navigation.scss'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { NavLink} from "react-router-dom"

const links = [
  { href: '/home', text: 'Home',className: 'Links' ,key:1},
  { href: '/about', text: 'About', className: 'Links', key:2 },
  { href: '/home', text: 'Employer ' , className: 'Links', key:3 },
  { href: '/employer', text: 'Job Seeker' , className: 'Links',key:4 },


];

const createNavItem = ({ href, text, className,key }) => (
  <NavItem>
    <NavLink to={href} key={key} style={{textDecoration:"none"}} className={className}>
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
            <div className=' ContainerLogoText2'>
             <p>R&A Work </p>

            </div>
            <NavbarToggler onClick={this.toggle} />

         
          <Collapse className='CollapseDiv' isOpen={this.state.isOpen} navbar>
           
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