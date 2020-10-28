import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/pages/Home"
import Register from "./components/pages/Register"

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;