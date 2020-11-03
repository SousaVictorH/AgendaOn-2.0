import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/defaultFootter";

import FormComponent from "../FormComponent";

import api from "../../services/api";
import {useHistory} from "react-router-dom";

import {FaPen, FaBookOpen} from "react-icons/fa";

function AddNotes(){

    const history = useHistory();
    const userId = localStorage.getItem('userId');

    const title = "<AgendaOn/>"

    const [note, setNote] = useState('');
    const [subject, setSubject] = useState('');


    async function handleSubmit(e){
        
        e.preventDefault();

        const data = {
            subject,
            note
        }

        try {

            await api.post('/add-note', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/home');
            
        } catch (error) {
            
            alert('Erro tente novamente');

        }

    }

    return(
        <div>
            <Navbar/>
            <FormComponent>
                <div className="logo">
                    <h1>{title}</h1>
                </div>
                <div className="container">
                    <h1>Add note</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaBookOpen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Subject"
                            value={subject} onChange={e => setSubject(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaPen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Nota"
                            value={note} onChange={e => setNote(e.target.value)}/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </FormComponent>
            <Footer/>
        </div>
    );
}

export default AddNotes;