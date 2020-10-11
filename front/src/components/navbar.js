import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from './fast-link';
import { ReactComponent as Logo } from "../images/white-city.svg";

class MainNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <Logo  />
          <Link to="/" className="navbar-brand">
            <strong className="ml-3 white-text">ЖК Белый Город</strong></Link>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
                <CustomNavLink to="/">Главная</CustomNavLink>
                <CustomNavLink to="/flats/">Квартиры</CustomNavLink>
                <CustomNavLink to="/build-scheme/">План застройки</CustomNavLink>
                <CustomNavLink to="/docs/">Документы</CustomNavLink>
                <CustomNavLink to="/contacts/">Контакты</CustomNavLink>
              {/*  <MDBNavItem>*/}
              {/*  <MDBDropdown>*/}
              {/*    <MDBDropdownToggle nav caret>*/}
              {/*      <div className="d-none d-md-inline">О нас</div>*/}
              {/*    </MDBDropdownToggle>*/}
              {/*    <MDBDropdownMenu right>*/}
              {/*      <MDBDropdownItem href="#!">Застройщик</MDBDropdownItem>*/}
              {/*      <MDBDropdownItem href="#!">Статьи</MDBDropdownItem>*/}
              {/*      <MDBDropdownItem href="#!">Testimonials</MDBDropdownItem>*/}
              {/*    </MDBDropdownMenu>*/}
              {/*  </MDBDropdown>*/}
              {/*</MDBNavItem>*/}
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="vk" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="instagram" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default MainNavbar;
