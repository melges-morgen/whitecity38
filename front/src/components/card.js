import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';
import image from "../images/flats/urban-1/M15.webp"

const CardExample = () => {
  return (
    <MDBCol style={{maxWidth: "22rem"}}>
      <MDBCard>
        <MDBCardImage className="img-fluid" src={image} alt="" waves/>
        <MDBCardBody>
          <MDBCardTitle><span>3 500 000 ₽</span></MDBCardTitle>
          <span>4-комн. кв. 96.5 м²</span>
          <MDBCardText>
            Уютная четырёхкомнатная квартира с просторным балконом.
            Общая площад квартиры составляет 96.5 м², а жилая площадь 78 м².
          </MDBCardText>
          <MDBBtn href="#">Подробнее</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;
