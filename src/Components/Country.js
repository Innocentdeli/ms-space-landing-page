import React from "react";
import uk from '../images/uk.png'
import senegal from '../images/senegal.png'
import india from '../images/india.png'
import egypt from '../images/egypt.png'
import naija from '../images/naija.png'
import ghana from '../images/ghana.png'
import usa from '../images/usa.png'
import '../App.css';
import { useMediaQuery } from 'react-responsive';
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
    MDBBtn,
    MDBRow
  } from 'mdb-react-ui-kit';

  const Country = () => {
    const countries = [uk, senegal, india, egypt, naija, ghana, usa];
    const isMobile = useMediaQuery({ maxWidth: 767 });


    return(
        <MDBContainer style={{backgroundColor:'#F5F5F5', borderRadius:'8px'}} className="mt-5">
            <p className="mb-3" style={{textAlign:'center', paddingTop:'20px', color:'#000', fontWeight:'bold'}}>Professionals from 7+ Countries around the globe</p>
            <ul style={{display: !isMobile ? 'flex': 'grid', gridTemplateColumns: !isMobile ?'' : 'auto auto auto'}}>
                <li className= {!isMobile ? "country" : 'country1'}>
                    <img src={uk} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={usa} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={naija} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={egypt} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={senegal} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={ghana} alt="United States" />
                    <p>England</p>
                </li>
                <li className={!isMobile ? "country" : 'country1'}>
                    <img src={india} alt="United States" />
                    <p>England</p>
                </li>
            </ul>
        </MDBContainer>
    );
  }

  export default Country;