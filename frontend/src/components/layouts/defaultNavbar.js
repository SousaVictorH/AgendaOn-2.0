import React, { Component } from "react";

import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaCode} from "react-icons/fa";

class Navbar extends Component{
    render(){
        return(
            <Nav>
                <NavLink to="/">
                    <FaCode size={54}/>
                </NavLink>

                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/sign-in">
                        Sig in
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        );
    }
}

export default Navbar;

export const Nav = styled.nav`
    background: #000;
    height: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;

    font-size: 20px;
`;

export const NavLink = styled(Link)`
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

export const NavMenu = styled.div`
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