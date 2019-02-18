import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './navbar.scss'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import {NavDropdown} from 'react-bootstrap'
import {  HamburgerSpinReverse } from 'react-animated-burgers'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, } from 'reactstrap';



const topNav = {
    top: '30px',
    right: '40px',
    position: 'absolute',
    zIndex: '2'
}

const navItem = {
    padding: '15px',
    textDecoration: 'none',
    fontSize: '0.8rem',
    color: '#272E3F'
}

class navbar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    menuClicked = () => {
        console.log('clocked');

        let mainNav = document.getElementById("js-menu");
        mainNav.classList.toggle("active");
    }

    render() {
        return (

            <Navbar style={this.state.isOpen ? {backgroundColor:'white', zIndex: '5'} : {backgroundColor:'transparent', zIndex: '5'}} light expand="md">
                <NavbarBrand href="/">
                    <svg className="logo-brand" width="58px" height="35px" viewBox="0 0 58 35" >
                        <defs></defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <path className="logo" fill="#FF5354" d="M13.9199219,33.6171875 C11.9863185,34.2031279 10.3310616,34.4960938 8.95410156,34.4960938 C6.61033984,34.4960938 4.69873787,33.7172929 3.21923828,32.159668 C1.7397387,30.602043 1,28.5830202 1,26.1025391 C1,23.6904176 1.65184895,21.7128983 2.95556641,20.1699219 C4.25928386,18.6269454 5.92674766,17.8554688 7.95800781,17.8554688 C9.88184556,17.8554688 11.3686471,18.5390557 12.418457,19.90625 C13.468267,21.2734443 13.9931641,23.2167843 13.9931641,25.7363281 L13.9785156,26.6298828 L3.94433594,26.6298828 C4.36425991,30.4091986 6.21482734,32.2988281 9.49609375,32.2988281 C10.6972716,32.2988281 12.1718663,31.9765657 13.9199219,31.3320312 L13.9199219,33.6171875 Z M4.07617188,24.4619141 L11.0927734,24.4619141 C11.0927734,21.5029149 9.98926885,20.0234375 7.78222656,20.0234375 C5.5654186,20.0234375 4.33007939,21.5029149 4.07617188,24.4619141 Z M23.9736328,34.1298828 L23.9736328,11 L26.859375,11 L26.859375,34.1298828 L23.9736328,34.1298828 Z M37.6455078,34.1298828 L37.6455078,18.2216797 L40.53125,18.2216797 L40.53125,34.1298828 L37.6455078,34.1298828 Z M37.6455078,15.3359375 L37.6455078,12.4501953 L40.53125,12.4501953 L40.53125,15.3359375 L37.6455078,15.3359375 Z" id="eli" stroke="#FF5354" strokeWidth="0.5"></path>
                            <circle className="logo-circle" id="Oval" stroke="#272E3F" strokeWidth="2" cx="52" cy="6" r="5"></circle>
                        </g>
                    </svg>
                </NavbarBrand>
                {/* <NavbarToggler onClick={this.toggle} style={{marginTop: '20px'}} /> */}
                <HamburgerSpinReverse buttonStyle={{marginTop: '30px', borderColor: 'transparent !important'}} buttonWidth={20} barColor="#FF5354"  className="navbar-toggler" isActive={this.state.isOpen} toggleButton={this.toggle} />

                <Collapse isOpen={this.state.isOpen} style={this.state.isOpen ? {backgroundColor:'white', zIndex: '5', marginTop: '35px'} : {backgroundColor:'transparent', zIndex: '5'}} navbar>
                    <Nav className="ml-auto" navbar>
                        <AniLink style={navItem} className="nav-item"  cover direction="up" duration={1} to="" bg="#FF5354">
                            Home
                        </AniLink>
                        <AniLink style={navItem} className="nav-item" cover direction="up" duration={1} to="about" bg="#FF5354">
                            About
                        </AniLink>
                        <AniLink style={navItem} className="nav-item" cover direction="right" duration={1} to="works" bg="#FF5354">
                            Works
                        </AniLink>
                        <AniLink style={navItem} className="nav-item" cover direction="left" duration={1} to="blog" bg="#272E40">
                            Tutorials
                        </AniLink>
                        <AniLink style={navItem} className="nav-item" cover direction="down" duration={1} to="contact" bg="#272E40">
                            Contact
                        </AniLink>
                    </Nav>
                </Collapse>
            </Navbar>
           
        )
    }
}

export default navbar


