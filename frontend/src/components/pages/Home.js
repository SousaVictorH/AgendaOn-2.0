import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import styled from "styled-components";

function Home(){
    return(
        <div>
            <Navbar/>
            <HomeContainer className="main">
                <h1>
                    <span>Agenda</span>
                    <span>ON</span>
                    <span>Corporation</span>
                </h1>

                <h2>
                    AgendaOn uses the best technologies
                    to give you the best experience.
                </h2>
            </HomeContainer>
            <Footer/>
        </div>
    );
}

export default Home;

const HomeContainer = styled.main`
    max-width: 104.8rem;
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
        letter-spacing: -0.24rem;

        color: #fff;

        span{
            padding: 0 0.67rem;
            filter: brightness(0) invert(1);

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            animation: colorCycle 10s ease-in-out infinite;
        }

        span:nth-child(1){
            background-image: linear-gradient(90deg, #007cf0, #00dfd8);
        }

        span:nth-child(2){
            background-image: linear-gradient(90deg, #7928ca, #ff0080);
            animation-delay: 3.33s;
        }

        span:nth-child(3){
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