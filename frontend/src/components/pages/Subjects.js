import React from "react";

import styled from "styled-components";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {FaTrashAlt} from "react-icons/fa";

function Subjects(){

    async function handleDelete(id){

        console.log(id);

    }

    return(
        <div>
            <Navbar/>
            <SubjectComponent>
                <h1>Hello, username.</h1>

                <ul>
                    <li>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>

                        <button onClick={() => handleDelete(1 /*anotation.id*/)} type="button">
                            <FaTrashAlt color="#256ce1" size={20}/>
                        </button>
                    </li>

                    <li>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>

                        <button onClick={() => handleDelete(1 /*anotation.id*/)} type="button">
                            <FaTrashAlt color="#256ce1" size={20}/>
                        </button>
                    </li>

                    <li>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>

                        <button onClick={() => handleDelete(1 /*anotation.id*/)} type="button">
                            <FaTrashAlt color="#256ce1" size={20}/>
                        </button>
                    </li>
                </ul>
            </SubjectComponent>
            <Footer/>
        </div>
    );
}

export default Subjects;

const SubjectComponent = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 55px;

h1{
    font-size: 38px;
    margin-bottom: 75px;
}

ul{
    color: #000000;
    width: 60%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;
}

ul li{
    background-color: #FFF;
    padding: 20px;
    border-radius: 8px;
    position: relative;
}

ul li button{
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    transition: .5s;
}

ul li button:hover{
    opacity: 0.5;
}

ul li strong{
    display: block;
    margin-bottom: 16px;
    color: #414141;
}

ul li p{
    color: #737373;
    line-height: 21px;
    font-size: 16px;
}

ul li p + strong{
    margin-top: 32px;
}
`;