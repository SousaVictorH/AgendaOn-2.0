import React, {useEffect, useState} from "react";

import ListComponent from "../ListComponent";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {useHistory} from "react-router-dom";

import api from "../../services/api";
import verificaSubject from "../../services/subjectVerification";

import {FaPlus, FaTrashAlt} from "react-icons/fa";

function Anotations(){

    const history = useHistory();

    const [anotations, setAnotations] = useState([]);

    const subjectName = localStorage.getItem('subjectName');
    const subject_id = localStorage.getItem('subjectId');

    function handleClick(){

        history.push('/add-anotations');

    }

    async function handleDelete(id){
        
        try {

            await api.delete('/anotations', {
                headers: {
                    Authorization: subject_id,
                    Id: id,
                }
            });

            setAnotations(anotations.filter(anotation => anotation.id !== id));
            
        } catch (error) {
            alert('Erro ao deletar, tente novamente')
        }

    }

    useEffect(async() => {

        if(! await verificaSubject){
            history.push('/sign-in');
        }

        api.get("/anotations", {
            headers: {
                Authorization: subject_id,
            }
        }).then(response => {
            setAnotations(response.data);
        })

    }, [subject_id]);

    return(
        <div>
            <Navbar/>
            <ListComponent>

                <div className="title-group">
                    <h1>{subjectName}</h1>

                    <button className="icon" onClick={handleClick}>
                        <FaPlus color="#fff"/>
                    </button>
                </div>

                <ul>
                    {anotations.map(anotation => (
                        <li key={anotation.id}>
                            <strong>Title:</strong>
                            <p>{anotation.title}</p>

                            <strong>Description:</strong>
                            <p>{anotation.description}</p>

                            <strong>Date:</strong>
                            <p>{anotation.date}</p>

                            <button onClick={() => handleDelete(anotation.id)} className="icon">
                                <FaTrashAlt color="#fff"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </ListComponent>
            <Footer/>
        </div>
    );
}

export default Anotations;