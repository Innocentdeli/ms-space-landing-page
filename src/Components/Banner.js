import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import banner from '../images/banner.jpeg'
import banner2 from '../images/banner2.webp'
import { useMediaQuery } from 'react-responsive';

function Banner() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <MDBCarousel showIndicators showControls fade>
        <MDBContainer fluid className="banner-content banner-container">
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
    
          <div className="align-items-center" style={{display:'flex'}}>
            <div  md="4" lg={4} className="text-section">
                <div className='mt-5 text'>
              <h2 className='mb-3 mt-3'>Empower Your Leadership Journey, Unlock Success. </h2>
              <p>
              MS-Space is your go-to hub for management system excellence! Offering consulting services for certification, internal audits, training, implementation, and advisory support. Partnered with certification bodies for seamless audits. Join us on the journey to elevate QUALITY and ensure lasting CONFORMITY.
              </p>
              </div>
              <MDBBtn className='mt-3'>Get Started</MDBBtn>
            </div>
            <div md="8" lg={8} className="image-section">
              <img
                src={banner}
                alt="Banner Image"
                className="img-fluid rounded"
              />
            </div>
          </div>
          }
      </MDBCarouselItem>

      <MDBCarouselItem className="w-100 d-block" itemId={2}>
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
    
          <div className="align-items-center" style={{display:'flex'}}>
            <div  md="4" lg={4} className="text-section">
                <div className='mt-5 text'>
              <h2 className='mb-3 mt-3'>Connect, Build and Collaborate </h2>
              <p>
              MSSPACE is a technology ecosystem for professional development, consultancy and conformity assessment. We provide confidence for you to hire the best professionals in advisory and consulting with assurance that you can get the right professional from anywhere round the globe. As professionals develop, you have the opportunity to choose the one that fits
              </p>
              </div>
              <MDBBtn className='mt-3'>Get Started</MDBBtn>
            </div>
            <div md="8" lg={8} className="image-section">
              <img
                src={banner}
                alt="Banner Image"
                className="img-fluid rounded"
                
              />
            </div>
          </div>
          }
      </MDBCarouselItem>
      </MDBContainer>

      {/* Add more carousel items here for additional slides */}
    </MDBCarousel>
  );
}

export default Banner;
