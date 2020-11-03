import React, {useState} from "react";

import Navbar from "../layouts/defaultNavbar";
import Footer from "../layouts/defaultFootter";
import FormComponent from "../FormComponent";

import {useHistory} from "react-router-dom";

import api from "../../services/api";

import {FaPhone, FaKey, FaEnvelope, FaUser} from "react-icons/fa";

function Signup(){

    const history = useHistory();

    const title = "<AgendaOn/>"

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAux, setPasswordAux] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    async function handleSubmit(e){

        e.preventDefault();

        if(password !== passwordAux){
            alert('Confira seus dados!');
            return;
        }

        const data ={
            name,
            password,
            email,
            phone
        }

        try {
            
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/sign-in')

        } catch (error) {
            
            alert('Erro no cadastro, tente novamente!');

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
                    <h1>SignUp</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="group">
                            <FaUser className="icon" color="#256ce1"/>
                            <input type="text" placeholder="Username"
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaKey className="icon" color="#256ce1"/>
                            <input type="password" placeholder="Password"
                            value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaKey className="icon" color="#256ce1"/>
                            <input type="password" placeholder="Re-enter your password"
                            value={passwordAux} onChange={e => setPasswordAux(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaEnvelope className="icon" color="#256ce1"/>
                            <input type="email" placeholder="Email"
                            value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="group">
                            <FaPhone className="icon" color="#256ce1"/>
                            <input type="Phone" placeholder="(xx) xxxx-xxxx"
                            value={phone} onChange={e => setPhone(e.target.value)}/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </FormComponent>
            <Footer/>
        </div>
    );
}

export default Signup;