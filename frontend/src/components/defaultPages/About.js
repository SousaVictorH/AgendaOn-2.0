import React from "react";

import styled from "styled-components";

import Navbar from "../layouts/defaultNavbar";
import Footer from "../layouts/defaultFootter";

function About(){

    const title = "<AgendaOn/>"

    return(
        <div>
            <Navbar/>
            <AboutComponent>
                <h1>{title}</h1>

                <section>
                    
                    
                    <h2>AgendaOn</h2>   
                    <p>AgendaOn foi criada para ser uma aplicação offline
                        em que o usuário pode se cadastrar, cadastrar matérias,
                        notas e lembretes relativas a uma determinada matéria,
                        entre outras funcionalidades.
                    </p>

                    <h2>Como usar?</h2>
                    <ol>
                        <li>Cadastre-se</li>
                        <li>Cadastre suas matérias</li>
                        <li>Cadastre suas notas e anotações</li>
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
        width: 55%;
        margin-top: 25px;
    }

    section h2{
        margin-left: auto;
        margin-right: auto;
        font-size: 35px;
        margin-bottom: 25px;
    }

    section p{
        font-size: 20px;
        margin-top: 8px;
        margin-bottom: 40px;
    }

    section ol{
        font-size: 20px;
        margin-left: 22.5px;
        margin-top: 8px;
        margin-bottom: 40px;
    }
`;