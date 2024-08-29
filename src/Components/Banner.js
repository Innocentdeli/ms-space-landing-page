import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import banner from '../images/banner.jpeg'
import { useMediaQuery } from 'react-responsive';

function Banner() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <MDBCarousel showIndicators showControls fade>
        <MDBContainer className="banner-content1 banner-container">
      <MDBCarouselItem className="w-100 d-block" itemId={1}>
        {isMobile ? 
            <MDBRow className="banner-container">
              <MDBCol>
                <div className="banner-content">
                  <img src={banner} alt="Banner Image" className="banner-image" />
                  <div className="banner-text">
                  <h2 className=''>Empower Your Leadership Journey, Unlock Success. </h2>
                  <p>
                     MS-Space is your go-to hub for management system excellence! Offering consulting services for certification, internal audits, training, implementation, and advisory support. Partnered with certification bodies for seamless audits. Join us on the journey to elevate QUALITY and ensure lasting CONFORMITY.
                  </p>
                  <MDBBtn>Get Started</MDBBtn>
                  </div>
                </div>
              </MDBCol>
            </MDBRow> :    
    
          <MDBRow className="align-items-center">
            <MDBCol  md="4" lg={4} className="text-section">
              <h2 className='mb-2 mt-3'>Empower Your Leadership Journey, Unlock Success. </h2>
              <p>
              MS-Space is your go-to hub for management system excellence! Offering consulting services for certification, internal audits, training, implementation, and advisory support. Partnered with certification bodies for seamless audits. Join us on the journey to elevate QUALITY and ensure lasting CONFORMITY.
              </p>
              <MDBBtn className='mt-3'>Get Started</MDBBtn>
            </MDBCol>
            <MDBCol md="8" lg={8} className="image-section">
              <img
                src={banner}
                alt="Banner Image"
                className="img-fluid rounded"
              />
            </MDBCol>
          </MDBRow>
          }
      </MDBCarouselItem>
      </MDBContainer>

      {/* Add more carousel items here for additional slides */}
    </MDBCarousel>
  );
}

export default Banner;
