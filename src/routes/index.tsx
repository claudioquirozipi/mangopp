import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    Container
} from 'react-bootstrap';
//Components
import HomeController from '../controller/home';
import NavView from '../views/nav';
import BlogController from '../controller/blog';

function Routes() {
    return(
        <Router>
            <NavView/> 
            <Route path="/blog/:id" exact component={BlogController} />
            <Route path="/" exact component={HomeController} />
        </Router>
    )
}
export default Routes;

