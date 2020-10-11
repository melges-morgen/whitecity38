import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-0">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/">Главная</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/flats/">Квартиры</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/build-scheme/">План застройки</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/docs/">Документы</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/contacts/">Контакты</a>
                        </h6>
                    </MDBCol>
                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                    <MDBCol md="8" sm="12" className="mt-5">
                        <p style={{ lineHeight: "1.7rem" }}>
                            Квартиры в новом ЖК Белый Город расположенном в мкр.Луговое. В наличии разные варианты
                          планировок: студии, однокомнатные, двухкомнатные, трёхкомнатные, четырёхкомнатные.
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
                <MDBRow className="pb-3">
                    <MDBCol md="12">
                        <div className="mb-5 flex-center">
                            <MDBIcon fab icon="vk" size="lg" className="mx-2 white-text mr-md-4"/>
                            <MDBIcon fab icon="instagram" size="lg" className="mx-2 white-text mr-md-4"/>
                            <MDBIcon fab icon="facebook-f" size="lg" className="mx-2 white-text mr-md-4"/>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()}
                    <a href="https://remirkutskstroi.ru"> РемИркутскСтрой</a> | ЖК Белый Город
                  <br />
                Разработчик информационного решения:<a href="https://casedev.su"> CaseDev </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
