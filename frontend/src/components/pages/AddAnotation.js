import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import FormComponent from "../FormComponent";

import {FaPen, FaBook, FaBookOpen, FaCalendar} from "react-icons/fa";

function AddAnotations(){

    const title = "<AgendaOn/>"

    const [anotationtitle, setAnotationTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');


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
                    <h1>Create anotation</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaPen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Title"
                            value={anotationtitle} onChange={e => setAnotationTitle(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaBookOpen className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Subject"
                            value={subject} onChange={e => setSubject(e.target.value)}/>
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