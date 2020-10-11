import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "50vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">ЖК Белый Город</h2>
                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">
                      Мы предлагаем квартиры, способные удовлетворить любые запросы, от студий до четырёхкомнатных в
                      трёхэтажных домах. Все квартиры с балконами. На цокольных этажах домов расположены гаражи
                      для машин с индивидуальным въездом в каждый.
                    </h4>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
