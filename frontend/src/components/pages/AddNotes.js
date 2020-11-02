import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/defaultFootter";

import FormComponent from "../FormComponent";

import {FaPen, FaBookOpen} from "react-icons/fa";

function AddNotes(){

    const title = "<AgendaOn/>"

    const [note, setNote] = useState('');
    const [subject, setSubject] = useState('');


    function handleSubmit(e){
        
        e.preventDefault();

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
                            <FaPen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Nota"
                            value={note} onChange={e => setNote(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaBookOpen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Subject"
                            value={subject} onChange={e => setSubject(e.target.value)}/>
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