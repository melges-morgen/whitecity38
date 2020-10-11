import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const FeaturesPage = () => {
    return (
        <MDBContainer tag="section"  className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Приемущества
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                Строительство ведётся опытными бригадами с соблюдением всех стандартов, используя новейшие технологии
              и оборудование. Жилищный Комплекс включает 6 домов, 80 квартир. Окончание строительства запланировано
              на четвёртый квартал 2022 года.
            </p>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="road" size="3x" className="grey-text" />
                    <h5 className="font-weight-bold my-4">Развитая инфраструктура</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        В пешей доступности от жилищного комплекса есть всё необходимое для комфортной жизни: детский
                      сад, поликлиника, торговый центр, фитнес клуб, аптеки, кафе. Дороги и общественный транспорт
                      связывают район со всеми значимыми объектами в городе и транспортными узлами.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="tree" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Облагороженная территория</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        После возведения домов вся территория будет приведена в порядок - дорожки заасфальтируют,
                      посадят газоны и деревья. Для детей оборудуют детские площадки, а для взрослых поставят скамейки.
                      Вам будет комфортно не только внутри квартиры, но и за её пределами!
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon fab icon="envira" size="3x" className="green-text" />
                    <h5 className="font-weight-bold my-4">Экологичные материалы</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        При строительстве используются только безопасные и экологичные материалы и смеси. Применяемые
                      технологии позволяют добиться идеального баланса долговечности и комфорта для
                      людей и животных. Газоны и деревья будут задерживать пыль, давая Вам возможность дышать чистым
                      воздухом.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default FeaturesPage;
