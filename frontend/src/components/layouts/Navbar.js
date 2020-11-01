import React, { Component } from "react";

import styled from "styled-components";
import {FaCode} from "react-icons/fa";
import {Nav, NavLink, NavMenu} from "./defaultNavbar";

class Navbar extends Component{

    render(){

        function handleLogOut(){
            console.log("LogOut");
        }

        return(
            <Nav>
                <NavImg>
                    <FaCode size={54}/>
                </NavImg>

                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Subjects
                    </NavLink>
                    <NavLink to="/add-subject" activeStyle>
                        Add Subject
                    </NavLink>
                    <NavLink to="/anotations" activeStyle>
                        Anotations
                    </NavLink>
                    <NavLink to="/add-anotations" activeStyle>
                        Add Anotations
                    </NavLink>
                </NavMenu>

                <NavBtnContainer>
                    <NavBtn onClick={handleLogOut}>
                        Log Out
                    </NavBtn>
                </NavBtnContainer>
            </Nav>
        );
    }
}

export default Navbar;

const NavImg = styled.div`
    color: #0A5FFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    transition: 0.2s ease-in-out;
`;

const NavBtnContainer = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const NavBtn = styled.button`
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