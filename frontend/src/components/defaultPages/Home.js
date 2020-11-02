import React from "react";

import Navbar from "../layouts/defaultNavbar";
import Footer from "../layouts/defaultFootter";

import styled from "styled-components";

function Home(){

    const title = "<ON/>";

    return(
        <div>
            <Navbar/>
            <HomeComponent className="main">
                <h1>
                    <span>Agenda</span>
                    <span>{title}</span>
                    <span>Corporation</span>
                </h1>

                <h2>
                    AgendaOn uses the best technologies
                    to give you the best experience.
                </h2>
            </HomeComponent>
            <Footer/>
        </div>
    );
}

export default Home;

const HomeComponent = styled.main`
    width: 100%;
    padding: 3.5rem 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top: 7.6rem;
        font-size: 1.4rem;
        letter-spaceing: -0.04rem;
    }

    h1{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        font-size: 5.2rem;
        line-height: 100%;
        letter-spacing: 0.01rem;

        span{
            filter: brightness(0) invert(1);

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            animation: colorCycle 10s ease-in-out infinite;
        }

        span:nth-child(1){
            padding: 0.4rem 0.8rem;
            background-image: linear-gradient(90deg, #007cf0, #00dfd8);
        }

        span:nth-child(2){
            padding: 0 0.8rem;
            background-image: linear-gradient(90deg, #7928ca, #ff0080);
            animation-delay: 3.33s;
        }

        span:nth-child(3){
            padding: 0.3rem 0.8rem;
            background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
            animation-delay: 6.66s;
        }
    }

    @keyframes colorCycle{
        0%, 55%{
            filter: brightness(0) invert(1);
        };
        11%, 33%{
            filter: none;
        }
    }
`;