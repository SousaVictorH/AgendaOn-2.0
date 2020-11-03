import React from "react";

import ListComponent from "../ListComponent";

import {useHistory} from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Subjects(){

    const history = useHistory();

    function handleClick(id){

        history.push(`/anotations/${id}`);

    }

    return(
        <div>
            <Navbar/>
            <ListComponent>
                <h1>Hello, username.</h1>

                <ul>
                    <li className="cursor" onClick={() => handleClick(1  /* subjectID */)}>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>
                    </li>

                    <li className="cursor" onClick={() => handleClick(1  /* subjectID */)}>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>
                    </li>

                    <li className="cursor" onClick={() => handleClick(1  /* subjectID */)}>
                        <strong>Name:</strong>
                        <p>Subject1</p>

                        <strong>Description:</strong>
                        <p>A quick description for subject1</p>

                        <strong>Notas:</strong>
                        <p>Nota1: 10.0</p>
                        <p>Nota2: 5.0</p>
                        <p>Nota3: 8.0</p>
                    </li>
                </ul>
            </ListComponent>
            <Footer/>
        </div>
    );
}

export default Subjects;