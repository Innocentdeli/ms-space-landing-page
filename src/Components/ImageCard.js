import React from "react";
import { useMediaQuery } from 'react-responsive';
import {card1, card2, card3, card4, card5, card6} from '../images';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle
} from 'mdb-react-ui-kit';

function ImageCard() {
  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              src={card1}
              alt="Image"
              position="top"
              className="img-fluid"
              style={{ height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Your Title Here</MDBCardTitle>
              <MDBCardText>
                Your text here. This can be a brief description or any content
                you want to include in the card.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              src={card2}
              alt="Image"
              position="top"
              className="img-fluid"
              style={{ height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Your Title Here</MDBCardTitle>
              <MDBCardText>
                Your text here. This can be a brief description or any content
                you want to include in the card.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              src={card3}
              alt="Image"
              position="top"
              className="img-fluid"
              style={{ height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Your Title Here</MDBCardTitle>
              <MDBCardText>
                Your text here. This can be a brief description or any content
                you want to include in the card.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              src={card4}
              alt="Image"
              position="top"
              className="img-fluid"
              style={{ height: "200px" }}
            />
            <MDBCardBody>
              <MDBCardTitle>Your Title Here</MDBCardTitle>
              <MDBCardText>
                Your text here. This can be a brief description or any content
                you want to include in the card.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ImageCard;
