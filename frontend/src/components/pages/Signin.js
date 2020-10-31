import React, {useState} from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import FormComponent from "../FormComponent";

import {FaUser, FaKey} from "react-icons/fa";

function Signin(){

    const title = "<AgendaON/>";

    const[userID, setUserID] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(e){

        e.preventDefault();

        const data ={
            userID,
            password,
        }

        console.log(data);
    }

    return(
        <div>
            <Navbar/>
            <FormComponent>
                <div className="logo">
                    <h1>{title}</h1>
                </div>
                <div className="container">
                    <h1>SignIn</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaUser className="icon" color="#256ce1"/>
                            <input type="text" placeholder="UserID"
                            value={userID} onChange={e => setUserID(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaKey className="icon" color="#256ce1"/>
                            <input type="password" placeholder="Password"
                            value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">
                                LogIN
                            </button>
                        </div>
                    </form>
                </div>
            </FormComponent>
            <Footer/>
        </div>
    );
}

export default Signin;