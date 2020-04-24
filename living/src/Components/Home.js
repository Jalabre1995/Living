import React, {Component} from 'react';
import './css/Home.css';
import House from './images/home.png'
import { Button } from "react-mdl";

export default class Home extends Component {
 

    render() {
        return(
            <div className="home">

            <img src={House} alt="home" height="200px" width="200px"/>
            
            <h1 className="header">Living</h1>

            <p className="quote">Welcome to the Application that will help you find a better place to live!</p>

            <Button raised colored>Begin Search</Button>


            </div>
        )
    }
}