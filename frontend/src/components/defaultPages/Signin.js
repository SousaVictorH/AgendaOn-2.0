import React, {useState} from "react";

import Navbar from "../layouts/defaultNavbar";
import Footer from "../layouts/defaultFootter";

import FormComponent from "../FormComponent";

import api from "../../services/api";

import {useHistory} from "react-router-dom";

import {FaUser, FaKey} from "react-icons/fa";

function Signin(){

    const history = useHistory();

    const title = "<AgendaOn/>"

    const[userId, setUserId] = useState("");
    const[password, setPassword] = useState("");

    async function handleSubmit(e){

        e.preventDefault();

        let data ={
            userId,
            password,
        }

        try {

            await api.post('/sessions', data);

            data = {
                userId
            }

            const response = await api.post('/get-user', data)

            const userName = response.data.name;

            console.log(userName);

            localStorage.setItem('userName', userName);
            localStorage.setItem('userId', userId);

            history.push('/home');
            
        } catch (error) {

            alert('Erro no login');
            
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
                    <h1>SignIn</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaUser className="icon" color="#256ce1"/>
                            <input type="text" placeholder="UserID"
                            value={userId} onChange={e => setUserId(e.target.value)}/>
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