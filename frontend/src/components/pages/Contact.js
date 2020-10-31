import React, {useState} from "react";

import FormComponent from "../FormComponent"

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {FaUser, FaEnvelope, FaPhone, FaBook} from "react-icons/fa";

function Contact(){

    const title = "<AgendaOn/>"

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


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
                    <h1>Fale Conosco</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaUser className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Username"
                            value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaEnvelope className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Email"
                            value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaPhone className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Phone"
                            value={phone} onChange={e => setPhone(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaBook className="ta-icon" color="#256ce1"/>
                            <textarea cols="25" rows="10" placeholder="Message"/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </FormComponent>
            <Footer/>
        </div>
    );
}

export default Contact;