import React from "react";

import styled from "styled-components";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function About(){

    const title = "<AgendaOn/>"

    return(
        <div>
            <Navbar/>
            <AboutComponent>
                <h1>{title}</h1>

                <section>
                    <div className="title">
                        <h2>Here you can:</h2>
                    </div>

                    <ol>
                        <li>Register yourself!</li>
                        <li>Create subjects</li>
                        <li>Register your notes</li>
                        <li>Add anotations</li>
                    </ol>
                </section>
            </AboutComponent>
            <Footer/>
        </div>
    );
}

export default About;

const AboutComponent = styled.main`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    margin-top: 25px;

    h1{
        font-size: 55px;
        color: #256ce1;
        margin-bottom: 55px;
    }

    section{
        width: 50%;
        margin-top: 25px;
    }

    section .title{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;
    }

    section .title h2{
        margin-left: auto;
        margin-right: auto;
        font-size: 35px;
        margin-bottom: 25px;
    }

    section ol li{
        font-size: 20px;
        margin-bottom: 18px;
    }
`;