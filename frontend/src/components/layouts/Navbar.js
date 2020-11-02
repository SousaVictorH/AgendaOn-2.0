import React from "react";

import styled from "styled-components";
import {FaCode} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import {Nav, NavLink, NavMenu} from "./defaultNavbar";

function Navbar(){

    const history = useHistory();

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
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
                <NavLink to="/add-notes" activeStyle>
                    Add Notes
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