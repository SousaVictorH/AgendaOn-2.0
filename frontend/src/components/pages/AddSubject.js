import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/defaultFootter";

import FormComponent from "../FormComponent";

import api from "../../services/api";

import {useHistory} from "react-router-dom";

import {FaPen, FaBook} from "react-icons/fa";

function AddSubject(){

    const title = "<AgendaOn/>"

    const history = useHistory();
    const userId = localStorage.getItem('userId');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    async function handleSubmit(e){
        
        e.preventDefault();

        const data = {
            name,
            description
        }

        try {

            await api.post('/subjects', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/home');
            
        } catch (error) {
            alert('Erro no cadastro de materia');
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
                    <h1>Add Subject</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaPen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Name"
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaBook className="ta-icon" color="#256ce1"/>
                            <textarea cols="25" rows="10" placeholder="Description"
                            value={description} onChange={e => setDescription(e.target.value)}/>
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

export default AddSubject;