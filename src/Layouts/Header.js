
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../msspacelogo.png'
import Nav from '../Components/Nav'
import mentor from '../images/mentor.png'
import profes from '../images/profes.png'
import cert from '../images/cert.png'
import '../App.css';
import Banner from '../Components/Banner';

import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';



function Header() {

    const [showNav, setShowNav] = React.useState(false);
    let navicon = [
        {id: 1, img: mentor, alt: 'Mentorship'},
        {id: 2, img: profes, alt: 'Profession'},
        {id: 3, img: cert, alt: 'Certification'},
    ]

  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='light' fixed>
      <MDBContainer >
        <div className='d-flex w-100 justify-content-between'>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='20'
              alt='Logo'
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </div>
        <MDBCollapse navbar open={showNav} className='justify-content-end'>
          <MDBNavbarNav className='ml-auto'>
          <MDBNavbarItem className='text-center' style={{padding: '0 17px'}}>

              <a href='#' className='d-block nav-link'>
                <img
                  src={mentor} 
                  alt='About'
                  style={{ width: '30px', height: '30px' }}
                />
                <div style={{ fontSize: '12px', color: '#1C2458' }}>Mentorship</div>
              </a>
            </MDBNavbarItem>
            <MDBNavbarItem className='text-center'>

                <a href='#' className='d-block nav-link'>
                <img
                    src={profes} 
                    alt='About'
                    style={{ width: '30px', height: '30px' }}
                />
                <div style={{ fontSize: '12px', color: '#1C2458' }}>Profession</div>
                </a>
            </MDBNavbarItem>
            <MDBNavbarItem className='text-center' style={{padding: '0 17px'}}>

                <a href='#' className='d-block nav-link'>
                <img
                    src={cert} 
                    alt='About'
                    style={{ width: '30px', height: '30px' }}
                />
                <div style={{ fontSize: '12px', color: '#1C2458' }}>Certification</div>
                </a>
            </MDBNavbarItem>
            <MDBNavbarItem className='text-center' >
                <a href='#' className='d-block nav-link'>
                <div style={{ fontSize: '17px', padding: '7px 9px', color: '#1C2458' }}>LogIn</div>
                </a>
            </MDBNavbarItem>
            <MDBNavbarItem className='text-center'>
                <a href='#' className='d-block nav-link'>
                <div className='signup-button'  style={{ fontSize: '15px', padding: '7px 9px', width: '110px' }}>SignUp</div>
                </a>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

        <Banner />

    </header>
  );
}

export default Header;
