import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
// import styled from 'styled-components'; 
import { ButtonContainer } from './Button'; 

export default class Navbar extends Component {
    render() {
        return (
            <NavWrap className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrap>
        );
    }
}


const NavWrap = styled.nav`
    background: rgb(0,34,36);
    background: linear-gradient(302deg, rgba(0,34,36,1) 0%, rgba(9,107,121,1) 35%, rgba(0,5,255,1) 100%);
    .nav-link {
        color: var(--mainWhite) !important;
        font-sizr: 1.4 rem;
        text-transform: capitalize;
    }
`
