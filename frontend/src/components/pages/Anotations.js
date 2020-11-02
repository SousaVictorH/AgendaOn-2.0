import React from "react";

import ListComponent from "../ListComponent";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {FaPlus} from "react-icons/fa";

function Anotations(){

    function handleClick(){

        // to="/add-anotations"

    }

    return(
        <div>
            <Navbar/>
            <ListComponent>

                <div className="title-group">
                    <h1>Subject</h1>

                    <button className="icon" onClick={handleClick}>
                        <FaPlus color="#fff"/>
                    </button>
                </div>

                <ul>

                    <li>
                        <strong>Title:</strong>
                        <p>Anotation1</p>

                        <strong>Description:</strong>
                        <p>A quick description for anotation1</p>

                        <strong>Date:</strong>
                        <p>2020/08/02</p>
                    </li>

                    <li>
                        <strong>Title:</strong>
                        <p>Anotation1</p>

                        <strong>Description:</strong>
                        <p>A quick description for anotation1</p>

                        <strong>Date:</strong>
                        <p>2020/08/02</p>
                    </li>

                    <li>
                        <strong>Title:</strong>
                        <p>Anotation1</p>

                        <strong>Description:</strong>
                        <p>A quick description for anotation1</p>

                        <strong>Date:</strong>
                        <p>2020/08/02</p>
                    </li>
                    

                </ul>
            </ListComponent>
            <Footer/>
        </div>
    );
}

export default Anotations;