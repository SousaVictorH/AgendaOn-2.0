import React, {useState} from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import styled from "styled-components";

function Signup(){

    const title = "<AgendaON/>";

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(e){

        e.preventDefault();

        const data ={
            username,
            password,
        }
        console.log("OK");
        console.log(data);
    }

    return(
        <div>
            <Navbar/>
            <SignUpContainer>
                <div className="logo">
                    <h1>{title}</h1>
                </div>
                <div className="container">
                    <h1>SignUp</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username"
                        value={username} onChange={e => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)}/>
                        <div className="footer">
                            <button className="button" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </SignUpContainer>
            <Footer/>
        </div>
    );
}

export default Signup;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3.2rem;
    color: #000000;

    .logo{
        font-size: 25px;
        color: #256ce1;
        margin-bottom: 3.2rem;
    }

    .container{
        background-color: #fff;
        border-radius: 5px;
        padding: 25px;
    }

    .container h1{
        margin-bottom: 18px;
    }

    .container input{
        width: 100%;
        height: 30px;
        margin-bottom: 12px;
        border-radius: 5px;
        border: 1px solid #000000;
        padding: 7px;
    }

    .container .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
    }

    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .footer .button{
        border-radius: 5px;
        background-color: #256ce1;
        padding: 10px 22px;
        color: #fff;
        border: 1px solid #256ce1;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        width: 30%;
        margin-bottom: 12px;
        text-align: center;
    
        &:hover{
            background: #fff;
            color: #256ce1;
        }
    }
`;