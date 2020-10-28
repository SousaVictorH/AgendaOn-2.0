import React from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import styled from "styled-components";

import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";

function NotFound(){
    return(
        <ComponentNotFound>
            <Navbar/>
            <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>Error 404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error occurred. The requested page was not found.
                            </div>
                            <footer>
                                <div className="error-actions">
                                <Btn>
                                    <BtnLink to="/">
                                        <FaHome/>&nbsp;Back to home
                                    </BtnLink>
                                </Btn>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>          
            </div>
            <Footer/>
        </ComponentNotFound>
    );
}

export default NotFound;

const ComponentNotFound = styled.div`

    .error-template{
        font-size: 28px;
        padding: 50px 15px;
        text-align: center;
    }

    .error-actions{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
    }
`;

const Btn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const BtnLink = styled(Link)`
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
        color: #256ce1;
    }
`;