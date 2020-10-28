import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/pages/Home";
import Sigup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Signin from "./components/pages/Signin";

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sign-up" component={Sigup}/>
                <Route path="/about" component={About}/>
                <Route path="/contact-us" component={Contact}/>
                <Route path="/sign-in" component={Signin}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;