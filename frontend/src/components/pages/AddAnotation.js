import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/defaultFootter";

import FormComponent from "../FormComponent";

import api from "../../services/api";
import {useHistory} from "react-router-dom";

import {FaPen, FaBook, FaCalendar} from "react-icons/fa";

function AddAnotations(){

    const history = useHistory();

    const subject_id = localStorage.getItem('subjectId');

    const title2 = "<AgendaOn/>"

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');


    async function handleSubmit(e){
        
        e.preventDefault();

        try {
            
            const data = {
                subject_id,
                title,
                description,
                date
            }

            await api.post('/anotations', data);

            history.push('/anotations');

        } catch (error) {
            alert('Erro ao cadastrar');
        }

    }

    return(
        <div>
            <Navbar/>
            <FormComponent>
                <div className="logo">
                    <h1>{title2}</h1>
                </div>
                <div className="container">
                    <h1>Create anotation</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaPen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Title"
                            value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaCalendar className="icon" color="#256ce1"/>
                            <input type="date"
                            value={date} onChange={e => setDate(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaBook className="ta-icon" color="#256ce1"/>
                            <textarea cols="25" rows="10" placeholder="Message"
                            value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </FormComponent>
            <Footer/>
        </div>
    );
}

export default AddAnotations;