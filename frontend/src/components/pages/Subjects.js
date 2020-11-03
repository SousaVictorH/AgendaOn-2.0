import React, { useState, useEffect } from "react";

import ListComponent from "../ListComponent";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Subjects() {

    const [subjects, setSubjects] = useState([]);

    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    const history = useHistory();

    useEffect(() => {

        api.get('/subjects', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setSubjects(response.data);
        })

    }, [userId]);

    return (
        <div>
            <Navbar />
            <ListComponent>
                <h1>Hello, {userName}.</h1>

                <ul>
                    {subjects.map(subject => {

                        function handleClick(name, id){
                            localStorage.setItem('subjectName', name);
                            localStorage.setItem('subjectId', id);
                            history.push(`/anotations`);
                        }

                        return(
                            <li key={subject.id} className="cursor" onClick={() => handleClick(subject.name, subject.id)}>
                                <strong>Name:</strong>
                                <p>{subject.name}</p>
    
                                <strong>Description:</strong>
                                <p>{subject.description}</p>
    
                                <strong>Notas:</strong>
                                <p>Nota1: {subject.nota1}</p>
                                <p>Nota2: {subject.nota2}</p>
                                <p>Nota3: {subject.nota3}</p>
                            </li>
                        )
                    })}
                </ul>
            </ListComponent>
            <Footer />
        </div>
    );
}

export default Subjects;