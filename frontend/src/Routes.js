import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/defaultPages/Home";
import Sigup from "./components/defaultPages/Signup";
import NotFound from "./components/defaultPages/NotFound";
import About from "./components/defaultPages/About";
import Contact from "./components/defaultPages/Contact";
import Signin from "./components/defaultPages/Signin";

import Subjects from "./components/pages/Subjects";
import AddSubject from "./components/pages/AddSubject";
import Anotations from "./components/pages/Anotations";
import AddAnotations from "./components/pages/AddAnotation";

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sign-up" component={Sigup}/>
                <Route path="/about" component={About}/>
                <Route path="/contact-us" component={Contact}/>
                <Route path="/sign-in" component={Signin}/>

                <Route path="/home" component={Subjects}/>
                <Route path="/add-subject" component={AddSubject}/>
                <Route path="/anotations" component={Anotations}/>
                <Route path="/add-anotations" component={AddAnotations}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;