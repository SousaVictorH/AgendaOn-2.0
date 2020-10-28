import React, { Component } from "react";

import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>

                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="sigin">
                        Sig in
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        );
    }
}

export default Navbar;

const Nav = styled.nav`
    background: #000;
    height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;

    font-size: 20px;
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active{
        color: #0A5FFF;
    }

    &:hover{
        color: #0A5FFF;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background-color: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background: #fff;
        color: #010606;
    }
`;